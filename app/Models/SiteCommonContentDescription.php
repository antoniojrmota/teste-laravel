<?php

namespace App\Models;

use App\Traits\HasCompositePrimaryKey;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;

class SiteCommonContentDescription extends Model
{
  //use LogsActivity;
  use HasCompositePrimaryKey;

  public $incrementing = false;
  protected $primaryKey = ['common_content_id', 'language_id'];
  public $timestamps = false;

  public function getActivitylogOptions(): \Spatie\Activitylog\LogOptions
  {
    return LogOptions::defaults()
      ->dontSubmitEmptyLogs()
      ->logOnlyDirty()
      ->logFillable();
  }
}
