<?php

namespace App\Models;

use App\Traits\HasCompositePrimaryKey;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;

class SiteBannerDescription extends Model
{
  //use LogsActivity;
  use HasCompositePrimaryKey;

  public $incrementing = false;
  protected $primaryKey = ['banner_id', 'language_id'];
  public $timestamps = false;

  protected $fillable = [
    'banner_id',
    'language_id',
    'image',
    'title',
    'subtitle',
    'text',
    'link',
    'target',
    'type',
    'label',
    'video',
    'youtube',
  ];

  public function getFullTitleAttribute()
  {
    return $this->title . (($this->subtitle) ? ' ' . $this->subtitle : null);
  }

  public function getActivitylogOptions(): \Spatie\Activitylog\LogOptions
  {
    return LogOptions::defaults()
      ->dontSubmitEmptyLogs()
      ->logOnlyDirty()
      ->logFillable();
  }
}
