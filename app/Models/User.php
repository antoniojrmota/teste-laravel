<?php

namespace App\Models;

use App\Traits\HasStatus;
use App\Traits\HasUuid;
//use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
//use Spatie\Activitylog\Contracts\Activity;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
  use HasFactory, Notifiable, HasUuid, HasStatus, HasRoles, HasApiTokens, LogsActivity;

  // Permissões
  protected $guard_name = 'web';

  protected $with = ['roles'];

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'name',
    'email',
    'password',
    'phone',
    'status'
  ];

  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [
    'password',
    'remember_token',
  ];

  /**
   * The attributes that should be cast to native types.
   *
   * @var array
   */
  protected $casts = [
    'email_verified_at' => 'datetime',
  ];

  /**
   * Modifica o padrão do HasRoles para usar o model que criamos
   */
  public function roles(): BelongsToMany
  {
    return $this->morphToMany(
      Role::class,
      'model',
      config('permission.table_names.model_has_roles'),
      config('permission.column_names.model_morph_key'),
      'role_id'
    );
  }

  /**
   * Retorna o nome completo com documento
   *
   * @return string
   * @author Fábio Neis <fabio@ezoom.com.br>
   */
  public function getFullNameAttribute()
  {
    $data = $this->company ?? $this->name; //Fantasia ou Razão Social
    if ($this->document)
      $data .= ' - ' . text_format('document', $this->document);

    return $data;
  }

  /**
   * Verifica em qual tipo de grupo o usuário pertence
   *
   * @param integer $system
   * @param string $guard
   * @return boolean
   * @author Fábio Neis <fabio@ezoom.com.br>
   */
  public function hasRoleSystem(int $system, string $guard = null)
  {
    return $guard
      ? $this->roles->where('guard_name', $guard)->contains('system', $system)
      : $this->roles->contains('system.id', $system);
  }

  /**
   * Logs desse usuário na tabela de logs
   * @return \Illuminate\Database\Eloquent\Relations\HasMany
   */
  // public function tag_access_log()
  // {
  //   return $this->hasMany(TagAccessLog::class, 'user_id', 'id');
  // }

  /*
   * Método apra adicionar propriedades nos logs de cada actividade do Model
   */
  // public function tapActivity(Activity $activity)
  // {
  //   $activity->properties = $activity->properties->push(['user_id' => auth()->user()->id ?? null]);
  // }

  public function getActivitylogOptions(): \Spatie\Activitylog\LogOptions
  {
      return LogOptions::defaults()
      ->dontSubmitEmptyLogs()
      ->logOnlyDirty()
      ->logFillable()
      ;
  }
}
