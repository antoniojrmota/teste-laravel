<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SiteAgentSubmitRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   * TODO: isso afeta permissoes?
   *
   * @return bool
   */
  public function authorize()
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules()
  {
    return [
      'company_id'       => 'nullable|string',
      'name'             => 'nullable|string',
      'cnpj'             => 'nullable|string',
      'email'            => 'nullable|string',
      'email_negotiator' => 'nullable|string',
      'phone'            => 'nullable|string',
      'phone2'         => 'nullable|string',
      'location.*'       => 'nullable',
      // 'id_country'       => 'nullable|integer',
      // 'address'          => 'nullable|string',
      // 'number'           => 'nullable|string',
      // 'complement'       => 'nullable|string',
      // 'district'         => 'nullable|string',
      // 'city'             => 'nullable|string',
      // 'state'            => 'nullable|string',
      // 'country'          => 'nullable|string',
      // 'zipcode'          => 'nullable|string',
      // 'lat'          => 'nullable|string',
      // 'lng'          => 'nullable|string',
      'area'             => 'nullable|string',
      'site'             => 'nullable|string',
      'ordem'         => 'nullable|integer',
      'status'           => 'nullable|integer',

    ];
  }

  /**
   * Prepare the data for validation.
   *
   * @return void
   */
  protected function prepareForValidation()
  {
    /*$input = $this->all();
    if (isset($input['languages'])) {
      foreach ($input['languages'] as $key => $lang) {
        $lang['value'] = preg_replace('/\D/', '', $lang['value']);
        $input['languages'][$key]['value'] = (float) substr($lang['value'], 0, -2) . '.' . substr($lang['value'], -2);
      }
    }

    $this->merge($input);*/
  }

  /**
   * Get custom attributes for validator errors.
   *
   * @return array
   */
  public function attributes()
  {
    return [];
  }
}
