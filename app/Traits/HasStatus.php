<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Builder;

trait HasStatus
{
  public function scopeIsActive(Builder $query)
  {
    $query->where('status', 1);
  }

  public function scopeIsInactive(Builder $query)
  {
    $query->where('status', 0);
  }
}
