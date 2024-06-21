<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\HasManyKeyBy;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;

class EzCity extends Model
{
  use HasFactory, SoftDeletes, HasManyKeyBy, LogsActivity;

  public function state()
  {
    return $this->belongsTo(EzState::class, 'state_id');
  }

  public function getActivitylogOptions(): \Spatie\Activitylog\LogOptions
  {
    return LogOptions::defaults()
      ->dontSubmitEmptyLogs()
      ->logOnlyDirty()
      ->logFillable();
  }
}
