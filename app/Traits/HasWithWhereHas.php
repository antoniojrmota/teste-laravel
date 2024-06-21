<?php

namespace App\Traits;

use Closure;
use Illuminate\Database\Eloquent\Builder;

/**
 * Ajuda a eliminar a necessidade de duplicar uma função que filtra a query e tb filtra o retorno pelo with
 *
 * Se existir necessidade de usar o WithWhereHas() com With() o ->with() deve vir antes do ->withWhereHas
 * Ex.: $query->with('files.description')->withWhereHas('files', fn($query) => $query->isActive());
 *
 * @author Fábio Neis <fabio@ezoom.com.br>
 */
trait HasWithWhereHas
{
  public function scopeWithWhereHas(Builder $query, string | Closure $relation, Closure $constraint)
  {
    $eagerLoads = $query->getEagerLoads();
    return $query->whereHas($relation, $constraint)
      ->setEagerLoads(array_merge($eagerLoads, [$relation => $constraint]));
  }
}
