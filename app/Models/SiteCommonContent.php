<?php

namespace App\Models;

use App\Traits\HasLanguageDescription;
use App\Traits\HasManyKeyBy;
use App\Traits\HasStatus;
use App\Traits\HasWithWhereHas;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;

class SiteCommonContent extends Model
{
  use LogsActivity, HasLanguageDescription, HasManyKeyBy, SoftDeletes, HasStatus, HasWithWhereHas;

  public function descriptions()
  {
    return $this->hasManyKeyBy('language_id', SiteCommonContentDescription::class, 'common_content_id', 'id');
  }

  public function getActivitylogOptions(): \Spatie\Activitylog\LogOptions
  {
    return LogOptions::defaults()
      ->dontSubmitEmptyLogs()
      ->logOnlyDirty()
      ->logFillable();
  }
}
