<?php

namespace App\Models;

use App\Traits\HasStatus;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;

class SiteAgent extends Model
{
  use LogsActivity, HasStatus, SoftDeletes;

  public function country()
  {
    return $this->belongsTo(EzCountry::class);
  }

  public function getFullAddressAttribute()
  {
    $addr = $this->address . ', ' . $this->number;
    $addr .= ($this->complement) ? ' - ' . $this->complement : null;
    $addr .= ($this->discrict) ? ' - ' . $this->discrict : null;
    $addr .= ($this->city) ? ' - ' . $this->city : null;
    $addr .= ($this->state) ? ' - ' . $this->state : null;

    return $addr;
  }

  public function getCityState()
  {
    return $this->city . (($this->state) ? ' - ' . $this->state : null);
  }

  // public function setLatLngAttribute(array $value)
  // {
  //   $this->attributes['lat_lng'] = DB::raw("ST_GeomFromText('POINT(" . implode(' ', $value) . ")')");
  // }

  public function getLatLngAttribute($value)
  {
    $latlng = ['latitude' => null, 'longitude' => null];
    if ($value)
      $latlng = unpack('Lpadding/corder/Lgtype/dlatitude/dlongitude', $value);

    return (object) $latlng;
  }

  public function getActivitylogOptions(): \Spatie\Activitylog\LogOptions
  {
    return LogOptions::defaults()
      ->dontSubmitEmptyLogs()
      ->logOnlyDirty()
      ->logFillable();
  }
}
