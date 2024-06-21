<?php

namespace App\Http\Controllers;

use App\Models\EzCompany;
use App\Models\SiteCategory;
use App\Models\SiteCompany;
use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\SEOTools;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Route;

class SiteController extends BaseController
{
  use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

  public function __construct()
  {
    $route = explode('.', Route::currentRouteName());
    array_pop($route);

    $this->route = implode('.', $route);

    // Buscar empresa
    $companyId = 1;
    $this->company = EzCompany::isActive()->with('descriptions')->find($companyId);

    SEOTools::setTitle($this->company->descr->meta_title);
    SEOTools::setDescription($this->company->descr->meta_description);
    SEOMeta::setKeywords($this->company->descr->meta_keywords);

    view()->share([
      'company'  => $this->company,
      'companies' => SiteCompany::where('company_id', $companyId)
        ->isActive()
        ->orderBy('order_by')
        ->with('descriptions')
        ->get()
    ]);
  }

  public function getCurrentLang()
  {
    return app('languages')[session()->get('locale', 'pt_BR')];
  }
}
