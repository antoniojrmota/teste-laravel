<?php

use App\Http\Controllers\DefaultController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Cms\DashboardController;
use App\Http\Controllers\Cms\DefinitionController;
use App\Http\Controllers\Cms\RoleController;
use App\Http\Controllers\Cms\UserController;
use App\Http\Controllers\Cms\PaginasController;
use App\Http\Controllers\Cms\BannersController;
use App\Http\Controllers\Cms\DownloadsCategoryController;
use App\Http\Controllers\Cms\DownloadsFileController;
use App\Http\Controllers\Cms\EmpresasController;
use App\Http\Controllers\Cms\HotsiteCategoryController;
use App\Http\Controllers\Cms\HotsiteCharacteristicController;
use App\Http\Controllers\Cms\HotsiteProductController;
use App\Http\Controllers\Cms\HotsiteProductGalleryController;
use App\Http\Controllers\Cms\LinhasController;
use App\Http\Controllers\Cms\LogsController;
use App\Http\Controllers\Cms\NewsletterController;
use App\Http\Controllers\Cms\SegmentosController;
use App\Http\Controllers\Cms\RepresentativesController;
use Illuminate\Support\Facades\Route;

// Authentication Routes...
Route::get('login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('login', [LoginController::class, 'login']);
Route::post('sair', [LoginController::class, 'logout'])->name('logout');
Route::get('sair', [LoginController::class, 'loggedOut']);

// Password Reset Routes...
Route::get('esqueci-a-senha', [ForgotPasswordController::class, 'showLinkRequestForm'])->name('password.request');
Route::post('esqueci-a-senha', [ForgotPasswordController::class, 'sendResetLinkEmail'])->name('password.email');
Route::get('alterar-minha-senha/{token}', [ForgotPasswordController::class, 'showResetForm'])->name('password.reset');
Route::post('alterar-minha-senha', [ForgotPasswordController::class, 'reset'])->name('password.update');

// Dashboard Logado
Route::group(['middleware' => 'auth'], function () {
  # Rota Cms
  Route::name('cms.')->prefix('cms')->group(function () {
    # Troca Idioma
    Route::get('comum/idioma/{locale}', [DefaultController::class, 'langCMS'])->name('default.lang');

    Route::post('alterar-minha-senha', [ResetPasswordController::class, 'updatePassword'])->name('password.update');

    Route::get('/', [DashboardController::class, 'base']);
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard.index');
    Route::resource('usuarios', UserController::class, ['except' => 'show']);
    Route::resource('grupos', RoleController::class, ['except' => 'show']);
    Route::resource('definicoes', DefinitionController::class);

    Route::get('distribuidores/atualizar', [DistributorController::class, 'drive'])->name('distribuidores.drive');
    Route::resource('distribuidores', DistributorController::class, ['except' => ['show', 'create', 'store', 'edit', 'update']]);

    Route::resource('paginas', PaginasController::class, ['except' => 'show']);
    Route::resource('banners', BannersController::class, ['except' => 'show']);
    Route::resource('empresas', EmpresasController::class, ['except' => 'show']);

    Route::resource('representantes', RepresentativesController::class, ['except' => ['show']]);

    Route::get('/newsletter', [NewsletterController::class, 'index'])->name('newsletter.index');
    Route::get('/newsletter/csv', [NewsletterController::class, 'csv'])->name('newsletter.csv');
    Route::get('/newsletter/destroy/{uuid}', [NewsletterController::class, 'destroy'])->name('newsletter.destroy');
    Route::delete('/newsletter/destroy/{uuid}', [NewsletterController::class, 'destroy'])->name('newsletter.destroy');
  });
});
