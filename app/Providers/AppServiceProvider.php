<?php

namespace App\Providers;

use App\Models\EzLanguage;
use App\Models\Language;
use Exception;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
  /**
   * Register any application services.
   *
   * @return void
   */
  public function register()
  {
    //
  }

  /**
   * Bootstrap any application services.
   *
   * @return void
   */
  public function boot()
  {
    Paginator::useBootstrap();

    // Resolve o bug
    // SQLSTATE[42000]: Syntax error or access violation: 1071 Specified key was too long; max key length is 1000 bytes
    // Quando utf8mb4, cada caractere de um campo CHAR ou VARCHAR reserva 4 bytes
    // Portanto 191 x 4 = 764bytes
    // https://pt.stackoverflow.com/questions/245432/sqlstate-42000-syntax-error-or-access-violation-1071-specified-key-was-too-lon
    Schema::defaultStringLength(191);

    // Tradução das rotas do resource
    Route::resourceVerbs([
      'create'  => __('cadastrar'),
      'edit'    => __('editar'),
      'store'   => __('salvar'),
      'update'  => __('atualizar'),
      'destroy' => __('remover'),
    ]);

    // Remove o "data" do json ao usar Resource
    JsonResource::withoutWrapping();

    // Idiomas
    try {

      $languages = EzLanguage::isActive()->get();

      App::singleton('languages', function () use ($languages) {
        return $languages->keyBy('code');
      });

      view()->share('languages', $languages->keyBy('code'));
    } catch (Exception $e) {

      Log::debug('AppServiceProvider: Problemas ao carregar os idiomas');
    }
  }
}
