<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmpresaSubmitRequest extends FormRequest
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
      'order_by'          => 'nullable|integer',
      'status'            => 'nullable|integer',
      'image'             => 'nullable|file|mimes:jpg,jpeg,webp,png',
      'image_remove'      => 'nullable|integer',
      'languages'         => 'required|array',
      'languages.*.title' => 'nullable|string',
      'languages.*.link'  => 'nullable|string',

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
    return [
      'order_by'                     => __('ordem'),
      'status'                       => __('status'),
      'imagem'                       => __('imagem'),
      'languages'                    => __('idiomas'),
      'languages.*.title'            => __('título'),
      'languages.*.link'             => __('link'),
    ];
  }
}
