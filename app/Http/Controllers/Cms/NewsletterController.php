<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\CmsController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\SiteNewsletter;
use Exception;

class NewsletterController extends CmsController
{

  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  function __construct()
  {
    $this->module = 'Newsletter';
    $this->moduleTitle = 'Newsletter';
    $this->model = new SiteNewsletter;
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

    $registers = $this->model->where('company_id', $this->company->id)
      ->orderBy('created_at', 'ASC');

    $table = [
      'primaryKey' => 'id',
      'registers'  => $registers->paginate($this->perPage),
      'columns'    => [
        [
          'name'   => __('Email'),
          'column' => 'email',
          'type'   => 'text'
        ],
        [
          'name'   => __('Criado em'),
          'column' => function ($linha) {
            return text_format("datetime", $linha->created_at);
          },
          'type'   => 'text',
        ]
      ],
      'actions' => [
        /*[
          'type'  => 'link',
          'name'  => __('Editar'),
          'icon'  => 'bx bx-edit',
          'route' => $this->route . '.edit',
          'rules' => [
            'can' => 'edit'
          ]
        ],*/
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

    return view('cms.newsletter.index', compact('table'));
  }

  public function csv()
  {

    $all = $this->model->all();
    $fileName = 'inscricoes.csv';

    $headers = array(
      "Content-type"        => "text/csv",
      "Content-Disposition" => "attachment; filename=$fileName",
      "Pragma"              => "no-cache",
      "Cache-Control"       => "must-revalidate, post-check=0, pre-check=0",
      "Expires"             => "0"
    );

    $columns = array('Company', 'Email', 'Aceito', 'Data');

    $callback = function () use ($all, $columns) {
      $file = fopen('php://output', 'w');
      fputcsv($file, $columns);

      foreach ($all as $inscricao) {
        $row['Company']  = $inscricao->company_id;
        $row['Email']  = $inscricao->email;
        $row['Aceito']    = $inscricao->accepted;
        $row['Data']    = $inscricao->created_at;

        fputcsv($file, array($row['Company'], $row['Email'], $row['Aceito'], $row['Data']));
      }

      fclose($file);
    };

    return response()->stream($callback, 200, $headers);
  }


  public function destroy(string $uuid)
  {

    $register = $this->model->findOrFail($uuid);

    $register->delete();
    return redirect()
      ->route($this->route . '.index')
      ->with('message', __('Banner removido com sucesso!'));
  }
}
