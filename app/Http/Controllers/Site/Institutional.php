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
use GuzzleHttp\Client;
use Illuminate\Support\Facades\View;


class Institutional extends SiteController
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
  public function search(Request $request)
  {
      try {
          $client = new Client([
              'verify' => false, 
          ]);
  
          $apiKey = 'AIzaSyCP847MwRnY6qKfOwPIAy3Mwq7ItKkm4oE';
          $query = $request->get('search', '');
          $latitude = $request->get('latitude', '-15.8267'); 
          $longitude = $request->get('longitude', '-47.9218');
          $location = $latitude . ',' . $longitude;
          $radius = $request->get('radius', 5000); 
  
          $url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
          $response = $client->request('GET', $url, [
              'query' => [
                  'key' => $apiKey,
                  'location' => $location,
                  'radius' => $radius,
                  'keyword' => $query
              ]
          ]);
  
          $data = json_decode($response->getBody(), true);
          $results = [];
          if (isset($data['results']) && count($data['results']) > 0) {
              $results = $data['results'];
           
          } else {
              \Log::info('Nenhum resultado encontrado', [
                  'location' => $location,
                  'radius' => $radius,
                  'query' => $query,
                  'api_response' => $data
              ]);
          }
  
          return view('site.institutional.places', [
              'results' => $results,
              'apiKey' => $apiKey, 
          ]);
  
      } catch (Exception $e) {
          return view('site.institutional.places', [
              'results' => [],
              'error' => $e->getMessage(),
              'apiKey' => $apiKey,
          ]);
      }
  }
  
}