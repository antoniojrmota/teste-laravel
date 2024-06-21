<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SiteAgentMapResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
   */
  public function toArray($request)
  {
    return (object) [
      'id'            => $this->id,
      'gps'           => json_encode([
        'lat' => $this->lat_lng->latitude,
        'lng' => $this->lat_lng->longitude
      ]),
      'name'          => $this->name,
      'full_address'  => $this->full_address,
      'city'          => (object) ['name' => $this->cityState],
      'email'         => $this->email,
      'phone'         => $this->phone,
      'website'       => $this->site,
      'gps_latitude'  => $this->lat_lng->latitude,
      'gps_longitude' => $this->lat_lng->longitude,
    ];
  }
}
