<?php

namespace App\Http\Requests;

use App\Models\Empresa;
use App\Models\EmpresaDescription;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class EzEmpresaSubmitRequest extends FormRequest
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
      'status'                       => 'nullable|boolean',

      'nome'                        => 'required|string',
      'dominio'                         => 'required|string',
      'logo'                         => 'nullable|file|mimes:jpg,webp,png',

      'scriptsHead'      => 'nullable|string',
      'scriptsBodyStart' => 'nullable|string',
      'scriptsBodyEnd'   => 'nullable|string',
      'socialFacebook'   => 'nullable|string',
      'socialInstagram'  => 'nullable|string',
      'socialTwitter'    => 'nullable|string',
      'socialYoutube'    => 'nullable|string',
      'socialLinkedIn'   => 'nullable|string',
      'socialOther'      => 'nullable|string',
      'smtpHost'         => 'nullable|string',
      'smtpUser'         => 'nullable|string',
      'smtpPass'         => 'nullable|string',
      'smtpPort'         => 'nullable|integer',

      'languages'                  => 'required|array',
      'languages.*.langEnabled'       => 'nullable|boolean',
      'languages.*.seoTitle'       => 'nullable|string',
      'languages.*.seoDescription' => 'nullable|string',
      'languages.*.seoKeywords'    => 'nullable|string',
      'languages.*.videoUrl'     => 'nullable|string',
      'languages.*.videoDescr'     => 'nullable|string',
      'languages.*.videoImage'     => 'nullable|file|mimes:jpg,webp,png',


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
