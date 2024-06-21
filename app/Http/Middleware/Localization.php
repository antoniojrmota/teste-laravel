<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\View;

class Localization
{
  /**
   * Handle an incoming request.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \Closure  $next
   * @return mixed
   */
  public function handle($request, Closure $next)
  {
    if (session()->has('locale')) {
      App::setLocale(session()->get('locale'));
    } else {
      $availableLangs = config('app.languages');
      $userLangs = $request->getLanguages();
      foreach ($userLangs as $usrLng) {
        if (in_array($usrLng, $availableLangs)) {
          session()->put('locale', $usrLng);
          App::setLocale($usrLng);
          break;
        }
      }
    }


    view()->share("lang", session()->get('locale'));
    


    // Compartilha as traduções js
    View::share('i18n', collect(trans('javascript'))->toJson());
    // Todas as traduções
    // View::share('i18n', collect(File::allFiles($this->langPath))->flatMap(function ($file) {
    //   return [
    //     ($translation = $file->getBasename('.php')) => trans($translation),
    //   ];
    // })->toJson());

    return $next($request);
  }
}
