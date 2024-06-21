<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BannerSubmitRequest extends FormRequest
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
      'status'                             => 'nullable|boolean',
      'ordem'                              => 'nullable|integer',
      'type'                               => 'required|string',
      'languages'                          => 'required|array',
      'languages.*.title'                  => 'nullable|string',
      'languages.*.subtitle'               => 'nullable|string',
      'languages.*.image'                  => 'nullable|file|mimes:jpg,webp,png',
      'languages.*.image_remove'           => 'nullable|integer',
      'languages.*.image_secondary'        => 'nullable|string',
      'languages.*.image_secondary_remove' => 'nullable|integer',
      'languages.*.text'                   => 'nullable|string',
      'languages.*.link'                   => 'nullable|string',
      'languages.*.target'                 => 'nullable|string',
      'languages.*.type'                   => 'nullable|string',
      'languages.*.label'                  => 'nullable|string',
      'languages.*.video'                  => 'nullable|file|mimes:mp4',
      'languages.*.youtube'                => 'nullable|string',
    ];
  }

  /**
   * Get custom attributes for validator errors.
   *
   * @return array
   */
  public function attributes()
  {
    return [
      'status'                      => __('status'),
      'ordem'                       => __('ordem'),
      'type'                        => __('tipo'),
      'languages'                   => __('idiomas'),
      'languages.*.title'           => __('título'),
      'languages.*.subtitle'        => __('subtítulo'),
      'languages.*.image'           => __('imagem'),
      'languages.*.image_secondary' => __('imagem mobile'),
      'languages.*.text'            => __('descrição'),
      'languages.*.link'            => __('link'),
      'languages.*.target'          => __('abrir link'),
      'languages.*.type'            => __('tipo'),
      'languages.*.label'           => __('link label'),
      'languages.*.video'           => __('video'),
      'languages.*.youtube'         => __('youtube'),
    ];
  }
}
