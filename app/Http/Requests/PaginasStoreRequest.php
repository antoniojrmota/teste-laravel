<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PaginasStoreRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
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
      'status'                     => 'nullable|boolean',
      'area'                       => 'required|string',
      'subarea'                    => 'nullable|string',
      'slug'                       => 'required|string',
      'image_width'                => 'required|numeric',
      'image_height'               => 'required|numeric',
      'protect'                    => 'nullable|boolean',
      'languages.*.title'          => 'nullable|string',
      'languages.*.subtitle'       => 'nullable|string',
      'languages.*.text'           => 'nullable|string',
      'languages.*.youtube_id'     => 'nullable|string',
      'languages.*.link'           => 'nullable|string',
      'languages.*.link_label'     => 'nullable|string',
      'languages.*.image'          => 'nullable|file|mimes:jpg,jpeg,webp,png',
      'languages.*.image_remove'   => 'nullable|integer',
      'languages.*.archive'        => 'nullable|file|mimes:jpg,jpeg,webp,png,doc,docx,pdf,xls,xlsx,odt,zip,svg',
      'languages.*.archive_remove' => 'nullable|integer',
    ];
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
