<?php

namespace App\Models;

use App\Traits\HasLanguageDescription;
use App\Traits\HasManyKeyBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;

class EzCountry extends Model
{
  use HasFactory, SoftDeletes, HasLanguageDescription, hasManyKeyBy, LogsActivity;

  public function states()
  {
    return $this->hasMany(EzState::class);
  }

  public function descriptions()
  {
    return $this->hasManyKeyBy('language_id', EzCountryDescription::class, 'country_id');
  }

  public function getActivitylogOptions(): \Spatie\Activitylog\LogOptions
  {
    return LogOptions::defaults()
      ->dontSubmitEmptyLogs()
      ->logOnlyDirty()
      ->logFillable();
  }
}
