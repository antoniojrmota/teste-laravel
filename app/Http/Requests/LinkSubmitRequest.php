<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class LinkSubmitRequest extends FormRequest
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
      'area'              => 'string',
      'subarea'           => 'string',
      'slug'              => 'required|string',
      'status'            => 'nullable|boolean',
      'languages'         => 'required|array',
      'languages.*.title' => 'nullable|string',
      'languages.*.link'  => 'nullable|string',
      'languages.*.descr' => 'nullable|string'
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
