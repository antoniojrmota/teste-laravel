<?php

namespace App\Console\Commands;

use App\Models\SiteBanner;
use App\Models\SiteBannerDescription;
use Illuminate\Console\Command;

class UpdateUrl extends Command
{
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  protected $signature = 'app:update-url';

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'Atualiza a url das imagens';

  /**
   * Create a new command instance.
   *
   * @return void
   */
  public function __construct()
  {
    parent::__construct();
  }

  /**
   * Execute the console command.
   *
   * @return int
   */
  public function handle()
  {
    //dd(config('app.url'));
    $banners = SiteBanner::with('descriptions')->get();
    foreach ($banners as $banner)
      dd($banner->toArray());
    return 0;
  }
}
