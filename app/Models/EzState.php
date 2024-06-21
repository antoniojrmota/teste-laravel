<?php

namespace App\Models;

use App\Traits\HasUuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;


class EzState extends Model
{
  use HasFactory, SoftDeletes, LogsActivity;

  protected $table = 'ez_state';

  public function country()
  {
    return $this->belongsTo(EzCountry::class, 'country_id');
  }

  public function cities()
  {
    return $this->hasMany(EzCity::class);
  }

  public function getActivitylogOptions(): \Spatie\Activitylog\LogOptions
  {
    return LogOptions::defaults()
      ->dontSubmitEmptyLogs()
      ->logOnlyDirty()
      ->logFillable();
  }
}
