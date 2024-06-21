<?php

namespace App\Services;

use Exception;

class FlickrApi
{
  const URL = 'https://api.flickr.com/services/rest/';

  public function __construct($apiKey)
  {
    $this->_key = $apiKey;
  }

  public function getCollections()
  {
    $response = $this->request('flickr.collections.getTree');
    return $response->collections->collection;
  }

  public function getCollection($collectionId)
  {
    $response = $this->request(
      'flickr.collections.getTree',
      array('collection_id' => $collectionId)
    );
    return $response->collections->collection[0];
  }

  public function getPhotosetPhotos($photosetId)
  {
    $response = $this->request(
      'flickr.photosets.getPhotos',
      array('photoset_id' => $photosetId)
    );
    return $response ? $response->photoset->photo : $response;
  }

  public function getPhotosetInfo($photosetId)
  {
    $response = $this->request(
      'flickr.photosets.getInfo',
      array('photoset_id' => $photosetId)
    );
    return $response ? (object) array(
      'title' => $response?->photoset->title->_content
    ) : $response;
  }

  public function getPhotoSizes($photo)
  {
    $allowedSizes = array('Small', 'Medium', 'Large', 'Original');
    $response = $this->request('flickr.photos.getSizes', array('photo_id' => $photo->id));
    return array_map(function ($size) use ($allowedSizes) {
      return (object) array(
        'size' => $size->width . 'x' . $size->height,
        'url' => $size->source,
        'label' => $size->label,
      );
    }, array_filter($response->sizes->size, function ($size) use ($allowedSizes) {
      return in_array($size->label, $allowedSizes);
    }));
  }

  public function getPhotoURL($photo, $size = null)
  {
    return sprintf(
      'http://farm%s.staticflickr.com/%s/%s_%s%s.jpg',
      $photo->farm,
      $photo->server,
      $photo->id,
      $photo->secret,
      $size ? '_' . $size : ''
    );
  }

  public function request($method, array $params = array())
  {
    $defaultParams = array(
      'method' => $method,
      'api_key' => $this->_key,
      'format' => 'json',
      'nojsoncallback' => 1
    );
    $params = array_merge($defaultParams, $params);
    $response = $this->_req(static::URL, $params);
    $r = json_decode($response);
    if ($r->stat === 'fail') {
      return false; //trigger_error('Code ' . $r->code . ': ' . $r->message, E_USER_WARNING);
    }
    return $r;
  }

  protected function _req($url, $params = null, $verb = 'POST')
  {
    $cparams = array('http' => array('method' => $verb, 'ignore_errors' => true));
    if ($params !== null) {
      $params = http_build_query($params);
      if ($verb == 'POST') {
        $cparams['http']['content'] = $params;
      } else {
        $url .= '?' . $params;
      }
    }
    $context = stream_context_create($cparams);
    @$fp = fopen($url, 'rb', false, $context);
    if (!$fp) {
      $res = false;
    } else {
      $meta = stream_get_meta_data($fp);
      $res = stream_get_contents($fp);
    }
    if ($res === false) {
      throw new Exception("$verb $url failed: $php_errormsg");
    }
    return $res;
  }
}
