<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\CmsController;
use Illuminate\Http\Request;

class DashboardController extends CmsController
{

  public function __construct()
  {
    parent::__construct();
  }

  /**
   * Caso o usuário acesse a raiz do cms "cms/"
   *
   * @return \Illuminate\Http\RedirectResponse
   * @author Fábio Neis <fabio@ezoom.com.br>
   */
  public function base()
  {
    return redirect(route('cms.dashboard.index'));
  }

  /**
   * Show the application dashboard.
   *
   * @return \Illuminate\View\View
   */
  public function index(Request $request)
  {
    $user = $request->user();

    return $this->getView('index', [
      'user' => $user
    ]);
  }
}
