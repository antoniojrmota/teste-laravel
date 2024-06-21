<?php

namespace App\Models;

use App\Traits\HasLanguageDescription;
use App\Traits\HasManyKeyBy;
use App\Traits\HasStatus;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;

class SiteBanner extends Model
{
  use LogsActivity, HasLanguageDescription, HasManyKeyBy, SoftDeletes, HasStatus;

  public function descriptions()
  {
    return $this->hasManyKeyBy('language_id', SiteBannerDescription::class, 'banner_id', 'id');
  }

  public function getFullTitle()
  {
    return $this->title . ' ' . $this->subtitle;
  }

  public function getNormalizedImageAttribute()
  {
    return !empty($this->image) ? $this->image : $this->descr->image;
  }

  public function getActivitylogOptions(): \Spatie\Activitylog\LogOptions
  {
    return LogOptions::defaults()
      ->dontSubmitEmptyLogs()
      ->logOnlyDirty()
      ->logFillable();
  }

  // public function updateDescriptions(array $input) {
  //   $this->descriptions()->delete();

  //   foreach ($input['languages'] as $langId => $lang) {
  //     $this->descriptions()->create([
  //       'language_id'  => $langId,
  //       'text'        => $lang['text'],
  //       'link'         => $lang['link']
  //     ]);
  //   }
  // }
}
