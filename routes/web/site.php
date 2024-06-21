<?php

use App\Http\Controllers\DefaultController;
use App\Http\Controllers\Site\Assistance;
use App\Http\Controllers\Site\Attendance;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Site\Home;
use App\Http\Controllers\Site\Download;
use App\Http\Controllers\Site\Institutional;
use App\Http\Controllers\Site\Product;

Route::get('comum/idioma/{locale}', [DefaultController::class, 'lang'])->name('default.lang');

Route::name('site.')->group(function () {

  Route::get('/', [Home::class, 'index'])->name('home.index');
  Route::multilingual('/', [Home::class, 'index'])->name('home.index');

  Route::get('/nossa-historia', [Institutional::class, 'index'])->name('institutional.index');
  Route::multilingual('/nossa-historia', [Institutional::class, 'index'])->name('institutional.index');

  Route::get('/busca', [Institutional::class, 'search'])->name('institutional.search');
  Route::multilingual('/busca', [Institutional::class, 'search'])->name('institutional.search');

  Route::get('/assistencia-tecnica', [Assistance::class, 'index'])->name('assistance.index');
  Route::multilingual('/assistencia-tecnica', [Assistance::class, 'index'])->name('assistance.index');

  Route::get('/representantes', [Assistance::class, 'agent'])->name('assistance.agent');
  Route::multilingual('/representantes', [Assistance::class, 'agent'])->name('assistance.agent');

  Route::post('/send', [Assistance::class, 'search'])->name('assistance.send');

  Route::get('/atendimento', [Attendance::class, 'faq'])->name('attendance.index');
  Route::multilingual('/atendimento', [Attendance::class, 'faq'])->name('attendance.index');

  Route::get('/atendimento/perguntas-frequentes', [Attendance::class, 'faq'])->name('attendance.faq');
  Route::multilingual('/atendimento/perguntas-frequentes', [Attendance::class, 'faq'])->name('attendance.faq');

  Route::get('/atendimento/financiamentos', [Attendance::class, 'funding'])->name('attendance.funding');
  Route::multilingual('/atendimento/financiamentos', [Attendance::class, 'funding'])->name('attendance.funding');
});
