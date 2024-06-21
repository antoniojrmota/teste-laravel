<?php

namespace App\Models;

use App\Traits\HasStatus;
use App\Traits\HasUuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;
use Spatie\Permission\Models\Role as SpatieRole;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;

class Role extends SpatieRole
{
  use HasFactory, HasUuid, HasStatus, LogsActivity;

  protected $fillable = [
    'name',
    'system'
  ];

  /**
   * Tipos de Painel
   */
  const MASTER = 1;
  const SITE = 2;

  /**
   * Retorna os paineis disponíveis
   *
   * @param integer $value
   * @return \Illuminate\Support\Collection|object
   * @author Fábio Neis <fabio@ezoom.com.br>
   */
  public static function getUserPanels(int $value = null)
  {
    $data = collect([
      (object) [
        'id' => static::MASTER,
        'name' => __('Master')
      ],
      (object) [
        'id' => static::SITE,
        'name' => __('Site')
      ],
    ]);

    if ($value) {
      $found = $data->search(function ($item) use ($value) {
        return $item->id == $value;
      });
      if ($found !== false)
        $data = $data->get($found);
      else
        $data = false;
    }

    return $data;
  }

  /**
   * Padroniza o retorno do tipo do painel
   *
   * @return object
   * @author Fábio Neis <fabio@ezoom.com.br>
   */
  public function getSystemAttribute()
  {
    $data = $this->getUserPanels($this->attributes['system']);
    return $data;
  }

  /**
   * Define consulta por tipo de painel
   *
   * @param Builder $query
   * @param integer $system
   * @return void
   * @author Fábio Neis <fabio@ezoom.com.br>
   */
  public function scopeBySystem(Builder $query, int $system)
  {
    $query->where('system', $system);
  }

  public function getActivitylogOptions(): \Spatie\Activitylog\LogOptions
  {
      return LogOptions::defaults()
      ->dontSubmitEmptyLogs()
      ->logOnlyDirty()
      ->logFillable()
      ;
  }
}
