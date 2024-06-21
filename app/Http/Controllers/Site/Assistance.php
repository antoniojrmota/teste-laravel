<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\SiteController;
use App\Http\Resources\SiteAgentMapResource;
use App\Models\EzCountry;
use App\Models\SiteAgent;
use App\Models\SiteCommonContent;
use Artesaos\SEOTools\Facades\SEOTools;
use Exception;
use Illuminate\Http\Request;

class Assistance extends SiteController
{
  public function index(Request $request)
  {
    $data = [
      'breadcrumb' => [
        (object) [
          'href'  => localized_route('site.home.index'),
          'title' => __('Home'),
        ],
        (object) [
          'href'  => localized_route('site.assistance.index'),
          'title' => 'Assistência',
        ],
      ],
    ];

    $representatives = SiteAgent::where(function ($query) use ($data) {
      $query->where('area', 0)
        ->orWhere('area', 1);
    })->isActive()
      ->get();

    $data['countries'] = EzCountry::whereIn('id', $representatives->pluck('country_id'))
      ->with('descriptions')
      ->get();

    $data['distributors'] = SiteAgentMapResource::collection($representatives)->toArray($request);

    return view('site.assistance.index', $data);
  }

  public function agent(Request $request)
  {
    $data = [
      'breadcrumb' => [
        (object) [
          'href'  => localized_route('site.home.index'),
          'title' => __('Home'),
        ],
        (object) [
          'href'  => localized_route('site.assistance.index'),
          'title' => 'Assistência',
        ],
      ],
    ];

    $representatives = SiteAgent::where(function ($query) use ($data) {
      $query->where('area', 0)
        ->orWhere('area', 1);
    })->where('company_id', $this->company->id)
      ->isActive()
      ->get();

    $data['countries'] = EzCountry::whereIn('id', $representatives->pluck('country_id'))
      ->with('descriptions')
      ->get();

    $data['distributors'] = SiteAgentMapResource::collection($representatives)->toArray($request);

    return view('site.assistance.index', $data);
  }

  public function search(Request $request)
  {
    $this->validate($request, [
      'address'   => 'nullable|string',
      'city'      => 'nullable|string',
      'direction' => 'nullable|integer',
      'country'   => 'nullable|string',
      'type'      => 'required|numeric',
    ], [], [
      'address' => __('digite seu endereço...'),
      'country' => __('país'),
      'type'    => __('vendas ou assistências')
    ]);

    try {
      $representatives = SiteAgent::where(function ($query) use ($request) {
        $query->where('area', 0)
          ->orWhere('area', $request->get('type', 0));
      })->when($request->get('location') == 0 && $request->get('direction') == 1, function ($query) use ($request) {
        $query->where('city', 'like', '%' . $request->get('city')  . '%');
        $query->where('state', 'like', '%' . $request->get('state')  . '%');
        $query->whereHas('country.descriptions', function ($query) use ($request) {
          $query->where('slug', $request->get('country'));
        });
      })->when($request->has('country'), function ($query) use ($request) {
        $query->whereHas('country.descriptions', function ($query) use ($request) {
          $query->where('slug', $request->get('country'));
        });
      })->when($request->get('location') == 0 && $request->get('direction') == 0 && $request->get('address') != null, function ($query) use ($request) {
        $query->where('name', 'like', '%' . $request->get('address') . '%')
          ->orWhere('district', 'like', '%' . $request->get('address')  . '%')
          ->orWhere('city', 'like', '%' . $request->get('address')  . '%')
          ->orWhere('state', 'like', '%' . $request->get('address')  . '%');
      })->when($request->get('location') == 1 && $request->get('address') != null, function ($query) use ($request) {
        $query->where('name', 'like', '%' . $request->get('address') . '%')
          ->orWhere('city', 'like', '%' . $request->get('city')  . '%');
      })->isActive()
        ->get();

      return response()->json([
        'status' => true,
        'data'   => SiteAgentMapResource::collection($representatives)
      ]);
    } catch (Exception $e) {
      return response()->json([
        'status'  => false,
        'message' => $e->getMessage()
      ]);
    }
  }
}
