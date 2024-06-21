<?php

namespace App\Traits;

use App\Models\Page;
use App\Models\Tag;
use App\Models\TagAccessLog;
use App\Models\User;
use App\Models\UserTemplate;
use Illuminate\Http\Response;
use Stevebauman\Location\Facades\Location;

trait HasAccessLog
{
  /**
   * Contabiliza um acesso
   *
   * @param Tag $tag
   * @param User $user
   * @param string $destiny
   * @return void
   * @author Fábio Neis <fabio@ezoom.com.br>
   */
  private function addAccessLog(
    Tag $tag = null,
    UserTemplate $userTemplate = null,
    Page $page = null,
    User $user = null,
    string $destiny,
    string $name = 'tag'
  ) {
    $position = Location::get(request()->server('HTTP_CF_CONNECTING_IP', request()->ip()));

    // Precisamos identificar quem é o dono
    // TODO: USER N2
    $account = null;
    if ($tag)
      $account = $tag->user;
    else if ($userTemplate) {
      $account = $userTemplate->user;
      // Se for cliente n2 pegamos a conta principal
      if ($userTemplate->tag_ownership->id ?? false)
        $account = $userTemplate->tag_ownership->collection->user;
    } else if ($page) {
      $account = $page->user;
      // Se for cliente n2 pegamos a conta principal
      if ($page->tag_ownership->id ?? false)
        $account = $page->tag_ownership->collection->user;
    }

    $validatedTooManyAccess = $this->validateAccessLog($account);
    abort_if(!$validatedTooManyAccess, Response::HTTP_TOO_MANY_REQUESTS);


    if ($userTemplate)
      $name = 'template';
    else if ($page)
      $name = 'page';

    $access = new TagAccessLog;
    $access->forceFill([
      'tag_id'           => $tag->id ?? null,
      'collection_id'    => $tag->collection_id ?? null,
      'user_template_id' => $userTemplate->id ?? null,
      'page_id'          => $page->id ?? null,
      'user_id'          => $user->id ?? null,
      'ip'               => $position->ip ?? request()->ip(),
      'city'             => $position->cityName ?? null,
      'state'            => $position->regionCode ?? null,
      'geolocation'      => $position ?? null,
      'url_destiny'      => $destiny,
      'name'             => $name
    ]);
    $access->save();
  }

  /**
   * Validação dos acessos mensais do plano do usuário
   *
   * @param User $user
   * @return boolean
   * @author Fábio Neis <fabio@ezoom.com.br>
   */
  protected function validateAccessLog(User $user = null)
  {
    if (!$user)
      return false;

    // Deste mês
    // Que tenha registro como tag, template ou página
    $accessLogCount = TagAccessLog::whereRaw("DATE_FORMAT(created_at, '%m-%Y') = ?", [now()->format('m-Y')])
      ->where(function ($query) use ($user) {
        $query->whereHas('tag', function ($query) use ($user) {
          $query->where('user_id', $user->id);
        })
          ->orWhereHas('user_template', function ($query) use ($user) {
            $query->where('user_id', $user->id);
          })
          ->orWhereHas('page', function ($query) use ($user) {
            $query->where('user_id', $user->id);
          });
      })->count();

    $monthViewCount = intval($user->plan->characteristics->max_monthly_views ?? 0);

    return $accessLogCount < $monthViewCount;
  }

  //Get client IP
  //Since we are using Load Balancer calling Location::Get()
  //Will always bring LB IP thus we need a custom method

  // public function getIp()
  // {
  //   foreach (array('HTTP_CLIENT_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_FORWARDED', 'HTTP_X_CLUSTER_CLIENT_IP', 'HTTP_FORWARDED_FOR', 'HTTP_FORWARDED', 'REMOTE_ADDR') as $key) {
  //     if (array_key_exists($key, $_SERVER) === true) {
  //       foreach (explode(',', $_SERVER[$key]) as $ip) {
  //         $ip = trim($ip); // just to be safe
  //         if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) !== false) {
  //           return $ip;
  //         }
  //       }
  //     }
  //   }
  //   //It will return server/LB ip when no client ip found
  //   return request()->ip();
  // }
}
