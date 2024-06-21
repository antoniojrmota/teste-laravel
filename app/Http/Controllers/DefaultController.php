<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller;

/**
 * Controller responsável pelos métodos padrões independente do painel que o usuário esteja logando
 */
class DefaultController extends Controller
{
  use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

  /**
   * Controla para onde deve direcionar o usuário
   *
   * @param Request $request
   * @return \Illuminate\Http\RedirectResponse
   * @author Fábio Neis <fabio@ezoom.com.br>
   */
  public function index(Request $request)
  {
    $user = $request->user();
    if ($user && $user->hasRoleSystem(Role::MASTER))
      return redirect(route('cms.dashboard.index'));
    else
      return redirect(localized_route('site.home.index'));
  }

  /**
   * Troca o idioma
   *
   * @param string $locale
   * @return \Illuminate\Http\RedirectResponse
   * @author Fábio Neis <fabio@ezoom.com.br>
   */
  public function lang(string $locale)
  {
    $availableLangs = config('app.languages');
    if (!in_array($locale, $availableLangs))
      abort(400);

    if ($locale) {
      App::setLocale($locale);
      session()->put('locale', $locale);
      return redirect('/');
    } else {
      return redirect('/');
    }
  }

  /**
   * Troca o idioma do CMS
   *
   * @param string $locale
   * @return \Illuminate\Http\RedirectResponse
   * @author Fábio Neis <fabio@ezoom.com.br>
   */
  public function langCMS(string $locale)
  {
    $availableLangs = config('app.languages');
    if (!in_array($locale, $availableLangs))
      abort(400);

    if ($locale) {
      App::setLocale($locale);
      session()->put('locale', $locale);
      return redirect(route('cms.dashboard.index'));
    } else {
      return redirect(route('cms.dashboard.index'));
    }
  }
}
