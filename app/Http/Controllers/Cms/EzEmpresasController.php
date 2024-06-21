<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\CmsController;
use App\Models\Empresa;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\EmpresaSubmitRequest;

class EzEmpresasController extends CmsController
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  function __construct()
  {
    $this->module = 'Empresas';
    $this->moduleTitle = 'Empresas';
    $this->model = new Empresa;
    parent::__construct();
  }

  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(Request $request)
  {
    $user = $request->user();

    $registers = $this->model->orderBy('created_at', 'ASC');

    $table = [
      'primaryKey' => 'uuid',
      'registers'  => $registers->paginate($this->perPage),
      'columns'    => [
        [
          'name'   => '',
          'type'   => 'status',
          'column' => 'status',
        ],
        [
          'name'   => __('Logo'),
          'column' => function ($linha) {
            return "/uploads/" . $linha->logo;
          },
          'type'   => 'image',
        ],
        [
          'name'   => __('Nome'),
          'column' => 'nome',
          'type'   => 'text',
        ],
        [
          'name'   => __('Domínio'),
          'column' => 'dominio',
          'type'   => 'text',
        ],


      ],
      'actions' => [
        [
          'type'  => 'link',
          'name'  => __('Editar'),
          'icon'  => 'bx bx-edit',
          'route' => $this->route . '.edit',
          'rules' => [
            'can' => 'edit'
          ]
        ],
        [
          'type'  => 'delete',
          'name'  => __('Remover'),
          'icon'  => 'bx bx-trash',
          'route' => $this->route . '.destroy',
          'rules' => [
            'can' => 'delete'
          ]
        ]
      ]
    ];

    return view('cms.empresas.index', compact('table'));
  }


  public function new()
  {
    $data['uuid'] = false;
    $data['register'] = $this->model;
    return view('cms.empresas.form', $data);
  }


  public function edit(string $uuid)
  {
    $item = $this->model->byUuid($uuid)->with(['descriptions'])->firstOrFail();
    //dd($item->description);
    return view("cms.empresas.form", ["register" => $item, "uuid" => $uuid]);
  }


  public function store(EmpresaSubmitRequest $r, $uuid = false)
  {
    $input = $r->validated();

    DB::transaction(function () use ($input, $r, $uuid) {

      if ($uuid != false) {
        $model = $this->model->byUuid($uuid)->firstOrFail();
      } else {
        $model = new $this->model();
      }

      $model->forceFill([
        'nome' => $input['nome'],
        'dominio' => $input['dominio'],
        'scriptsHead' => $input['scriptsHead'],
        'scriptsBodyStart' => $input['scriptsBodyStart'],
        'scriptsBodyEnd' => $input['scriptsBodyEnd'],
        'socialFacebook' => $input['socialFacebook'],
        'socialInstagram' => $input['socialInstagram'],
        'socialTwitter' => $input['socialTwitter'],
        'socialYoutube' => $input['socialYoutube'],
        'socialLinkedIn' => $input['socialLinkedIn'],
        'socialOther' => $input['socialOther'],
        'smtpHost' => $input['smtpHost'],
        'smtpUser' => $input['smtpUser'],
        'smtpPass' => $input['smtpPass'],
        'smtpPort' => $input['smtpPort'],
        'status' => isset($input['status']) ?? 0,
      ]);

      if ($r->file('logo')) {
        $path = $r->file('logo')->store('');
        $model->logo = $path;
      }

      try {
        $model->save();
      } catch (\Exception $e) {
        dd($e->getMessage());
      }

      $model->descriptions()->delete();

      foreach ($input['languages'] as $langId => $lang) {


        $item = $model->descriptions()->create([
          'language_id'    => $langId,
          'langEnabled'    => isset($lang['langEnabled']),
          'seoTitle'       => $lang['seoTitle'],
          'seoDescription' => $lang['seoDescription'],
          'seoKeywords'    => $lang['seoKeywords'],
          'videoUrl'       => $lang['videoUrl'],
          'videoDescr'     => $lang['videoDescr']
        ]);

        if (isset($lang['videoImage'])) {
          $path = $lang['videoImage']->store('');
          $item->videoImage = $path;
          $item->save();
        }
      }
    });

    return redirect()
      ->route($this->route . '.index')
      ->with('message', ($uuid != false) ? __('Empresa atualizada!') : __('Empresa adicionada!'));
  }

  public function destroy(string $uuid)
  {
    $item = $this->model->byUuid($uuid)->delete();
    return redirect()
      ->route($this->route . '.index')
      ->with('message', __('Empresa removida com sucesso!'));
  }


  public function deleteImage(Request $r)
  {
    $data = $r->all();
    $uuid = $data['uuid'];
    $field = $data['field'];
    $model = $this->model->byUuid($uuid)->firstOrFail();

    // Imagem na descrição
    if ($field[1] == '.') {

      $partes = explode(".", $field);
      $idx = (int) $partes[0];
      $fld = $partes[1];

      $descr = $model->descriptions[$idx];

      unlink('uploads/' . $descr->$fld);

      $descr->$fld = null;
      $descr->save();

      // Caso seja a logomarca
    } else {

      if ($model->$field) {
        unlink('uploads/' . $model->$field);
        $model->$field = null;
        $model->save();
      }
    }
  }
}
