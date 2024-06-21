<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;
use Ramsey\Uuid\Uuid;

/**
 * Trata as colunas uuid automaticamente
 *
 * MySQL
 * LOWER(CONCAT(
 *   SUBSTR(HEX(uuid), 1, 8), '-',
 *   SUBSTR(HEX(uuid), 9, 4), '-',
 *   SUBSTR(HEX(uuid), 13, 4), '-',
 *   SUBSTR(HEX(uuid), 17, 4), '-',
 *   SUBSTR(HEX(uuid), 21)
 * ))
 *
 * UNHEX(REPLACE("3f06af63-a93c-11e4-9797-00505690773f", "-",""))
 *
 * @author Fábio Neis <fabio@ezoom.com.br>
 */
trait HasUuid
{
  /**
   * Boot function from laravel.
   */
  protected static function bootHasUuid()
  {
    static::creating(function ($model) {
      $uuid = $model->uuid ?? Str::uuid();
      $model->uuid = static::encodeUuid($uuid);
    });
  }

  public static function encodeUuid(string $uuid)
  {
    if (!Uuid::isValid($uuid))
      return null;

    if (!$uuid instanceof Uuid)
      $uuid = Uuid::fromString($uuid);

    return $uuid->getBytes();
  }

  public static function decodeUuid(string $binaryUuid)
  {
    //Se já veio correto
    if (Uuid::isValid($binaryUuid))
      return $binaryUuid;

    return Uuid::fromBytes($binaryUuid)->toString();
  }

  public function getUuidAttribute(string $binaryUuid = null)
  {
    if (!$binaryUuid)
      return null;

    return $this->decodeUuid($binaryUuid);
  }

  public function scopeByUuid(Builder $query, string $uuid)
  {
    $query->where('uuid', static::encodeUuid($uuid));
  }

  public function scopeByUuids(Builder $query, array $uuid)
  {
    $query->whereIn('uuid', array_map(function ($uuid) {
      return static::encodeUuid($uuid);
    }, $uuid));
  }

  public function scopeWithoutUuids(Builder $query, array $uuid)
  {
    $query->whereNotIn('uuid', array_map(function ($uuid) {
      return static::encodeUuid($uuid);
    }, $uuid));
  }
}
