<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\CmsController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use App\Http\Requests\SiteAgentSubmitRequest;
use App\Models\EzCountry;
use App\Models\EzState;
use App\Models\SiteAgent;
use App\Traits\HasSingleFileUpload;
use GuzzleHttp\Client;
use Illuminate\Support\Str;

use Exception;

class RepresentativesController extends CmsController
{
  use HasSingleFileUpload;

  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  function __construct()
  {
    $this->module = 'Representantes';
    $this->moduleTitle = 'Representantes';
    $this->model = new SiteAgent;
    parent::__construct();

    $route = Route::currentRouteName();
    if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') {
      $url = "http://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
      header('Location: ' . $url, true, 301);
      exit();
    }
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
          'name'   => __('Título'),
          'column' => 'name',
          'type'   => 'text',
        ],
        [
          'name'   => __('Cidade'),
          'column' => function ($row) {
            return $row->getCityState();
          },
          'type'   => 'text',
        ],
        [
          'name'   => 'Status',
          'type'   => 'status',
          'column'   => 'status',
        ],
      ],
      'actions' => [
        [
          'type'  => 'link',
          'name'  => __('Editar'),
          'icon'  => 'bx bx-edit',
          'route' => $this->route . '.edit',
          'rules' => [
            'can' => 'update'
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

    $representate = SiteAgent::findOrFail($table['registers'][0]->id);

    return view('cms.pos.index', compact('table'));
  }

  public function create(Request $request)
  {
    $data = [
      'countries' => EzCountry::with('descriptions')->get(),
      'states' => EzState::get(),
      'areas' => [
        ['id' => '0', 'title' => __('Ambos')],
        ['id' => '1', 'title' => __('Vendas de Carroceria')],
        ['id' => '2', 'title' => __('Vendas de Peças')],
      ]
    ];

    return view('cms.pos.form', $data);
  }

  public function edit(string $uuid)
  {
    $data = [
      'uuid' => $uuid,
      'register' => $this->model->where('company_id', $this->company->id)->findOrFail($uuid),
      'countries' => EzCountry::with('descriptions')->get(),
      'states' => EzState::get(),
      'areas' => [
        ['id' => '0', 'title' => __('Ambos')],
        ['id' => '1', 'title' => __('Vendas de Carroceria')],
        ['id' => '2', 'title' => __('Vendas de Peças')],
      ]
    ];

    return view("cms.pos.form", $data);
  }

  public function update(SiteAgentSubmitRequest $request, string $uuid)
  {
    return $this->save($request, $uuid);
  }

  public function store(SiteAgentSubmitRequest $request)
  {
    return $this->save($request);
  }

  private function save(Request $request, ?string $uuid = null)
  {
    $input = $request->validated();

    if (isset($input['location']['zipcode']) && !empty($input['location']['zipcode'])) {
      $zipcode = $input['location']['zipcode'];
      $googleApiKey = env('GMAPS_KEY');
      $googleEndPoint = "https://maps.googleapis.com/maps/api/geocode/json";

      $client = new Client(['verify' => false]);

      $apiResponse = $client->get($googleEndPoint, [
        'query' => [
          'key' => $googleApiKey,
          'address' => $zipcode,
        ],
      ]);

      $clearResponse = json_decode($apiResponse->getBody()->getContents(), true);

      if (!empty($clearResponse['results'])) {
        $coordinates = $clearResponse['results'][0]['geometry']['location'];

        $input['lat'] = $coordinates['lat'];
        $input['lng'] = $coordinates['lng'];
      } else if (strlen($zipcode) == "8" || strlen($zipcode) == "9") {
        $newApi = "https://viacep.com.br/ws/$zipcode/json/";
        $newApiResponse = $client->get($newApi);

        $jsonResponse = json_decode($newApiResponse->getBody()->getContents(), true);

        $responseLogradouro = Str::replace(" ", "+", $jsonResponse["logradouro"]);
        $responsebairro = Str::replace(" ", "+", $jsonResponse["bairro"]);
        $responseUF = Str::replace(" ", "+", $jsonResponse["uf"]);
        $queryAddress = $responseLogradouro . "," . $responsebairro . "," . $responseUF;

        $apiResponse = $client->get($googleEndPoint, [
          'query' => [
            'key' => $googleApiKey,
            'address' => $queryAddress,
          ],
        ]);

        $clearResponse = json_decode($apiResponse->getBody()->getContents(), true);

        // $coordinates = $clearResponse['results'][0]['geometry']['location'];

        // $input['lat'] = $coordinates['lat'];
        // $input['lng'] = $coordinates['lng'];
      }
    }

    try {
      DB::transaction(function () use ($input, $request, $uuid) {
        $model = $this->model->findOrNew($uuid);

        $lat = $input['lat'] ?? '0';
        $lng = $input['lng'] ?? '0';

        $model->forceFill([
          'company_id' => $this->company->id,
          'order_by'   => (int) $input['ordem'],
          'status'     => $input['status'] ?? 0,
          'name'       => $input['name'],
          'email'   => $input['email'],
          'email_negotiator'   => $input['email_negotiator'],
          'phone'   => $input['phone'],
          'phone_02'   => $input['phone2'],
          'site'   => $input['site'],
          'area'   => $input['area'],
          'country_id'   => $input['location']['id_country'],
          'state'   => $input['location']['state'],
          'city'   => $input['location']['city'],
          'zipcode'   => $input['location']['zipcode'],
          'address'   => $input['location']['address'],
          'district'   => $input['location']['district'],
          'number'   => $input['location']['number'],
          'complement'   => $input['location']['complement'],
          'lat_lng'   => DB::raw("GeomFromText('POINT($lat $lng)')"),
        ]);

        $country = EzCountry::find($input['location']['id_country'])->descriptions;

        if ($country) {
          $model->country = $country[1]->name;
        }
        $model->save();
      });

      return redirect()
        ->route($this->route . '.index')
        ->with('message', ($uuid != false) ? __('Representante atualizado!') : __('Representante adicionado!'));
    } catch (Exception $e) {
      return redirect()
        ->back()
        ->withInput()
        ->with(['message' => $e->getMessage(), 'type' => 'warning']);
    }
  }

  public function destroy(string $uuid)
  {
    $register = $this->model->findOrFail($uuid);
    $register->delete();

    return redirect()
      ->route($this->route . '.index')
      ->with('message', __('Representante removido com sucesso!'));
  }
}
