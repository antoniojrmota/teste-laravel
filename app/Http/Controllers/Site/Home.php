<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\SiteController;
use App\Models\SiteBanner;
use App\Models\SiteCommonContent;
use App\Models\SiteLine;
use App\Services\WpFeed;
use Artesaos\SEOTools\Facades\SEOTools;

class Home extends SiteController
{
  public function index()
  {
    SEOTools::setTitle(__('Home'));

    $data = [
      'banners' => SiteBanner::where('company_id', $this->company->id)
        ->isActive()
        ->orderBy('order_by')
        ->with('descriptions')
        ->get(),
      'news' => (new WpFeed)->getFeed($this->getCurrentLang()),
    ];

    return view('site.home', $data);
  }
}
