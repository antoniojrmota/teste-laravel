<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\SiteController;
use App\Models\SiteCommonContent;
use App\Models\SiteFaq;
use Artesaos\SEOTools\Facades\SEOTools;

class Attendance extends SiteController
{
  public $tabs;

  public function __construct()
  {
    $this->tabs = [
      (object) [
        'href' => localized_route('site.attendance.faq'),
        'title' => __('Perguntas Frequentes'),
      ],
      (object) [
        'href' => localized_route('site.attendance.funding'),
        'title' => __('Financiamento'),
      ],
    ];

    parent::__construct();
  }

  public function faq()
  {
    $data = [
      'breadcrumb' => [
        (object) [
          'href' => localized_route('site.home.index'),
          'title' => __('Home'),
        ],
        (object) [
          'href' => localized_route('site.attendance.index'),
          'title' => 'Atendimento',
        ],
        (object) [
          'href' => localized_route('site.attendance.faq'),
          'title' => 'Perguntas Frequentes',
        ],
      ],
      'tabs' => $this->tabs,
      'faqs' => SiteFaq::where('company_id', $this->company->id)
        ->isActive()
        ->orderBy('order_by')
        ->with('descriptions')
        ->get()
    ];

    $data['tabs'][0]->active = 1;

    return view('site.attendance.faq', $data);
  }

  public function funding()
  {
    $data = [
      'breadcrumb' => [
        (object) [
          'href' => localized_route('site.home.index'),
          'title' => __('Home'),
        ],
        (object) [
          'href' => localized_route('site.attendance.index'),
          'title' => 'Atendimento',
        ],
        (object) [
          'href' => localized_route('site.attendance.faq'),
          'title' => 'Financiamento',
        ],
      ],
      'tabs' => $this->tabs,
    ];

    $data['tabs'][1]->active = 1;

    return view('site.attendance.funding', $data);
  }
}
