<?php

namespace App\Http\Requests;

use App\Models\Role;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserStoreRequest extends FormRequest
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
      'name'          => 'required|string',
      'email'         => 'required|email|unique:users,email',
      'password'      => 'required|string',
      'status'        => 'nullable|boolean',
      //'phone'         => 'required|string',
      'role'          => 'string|exists:roles,name|' . Rule::requiredIf(function () {
        return $this->user()->hasRoleSystem(Role::MASTER);
      }),
      'permissions'   => 'nullable|array',
      'permissions.*' => 'integer|exists:permissions,id|' . Rule::requiredIf(function () {
        return $this->user()->hasRoleSystem(Role::MASTER);
      })
    ];
  }

  /**
   * Prepare the data for validation.
   *
   * @return void
   */
  protected function prepareForValidation()
  {
    $input = $this->all();
    if (isset($input['phone']))
      $input['phone'] = preg_replace('/\D/', '', $input['phone']);

    $this->merge($input);
  }

  /**
   * Get custom attributes for validator errors.
   *
   * @return array
   */
  public function attributes()
  {
    return [
      'name'        => __('nome'),
      'email'       => __('e-mail'),
      'password'    => __('senha'),
      'phone'       => __('telefone'),
      'role'        => __('grupo'),
      'permissions' => __('permissoes'),
      'status'        => __('status'),
    ];
  }

  /**
   * Get custom messages for validator errors.
   *
   * @return array
   */
  public function messages()
  {
    return [
      'permissions.required_if' => 'O campo :attribute é obrigatório quando o painel for Master'
    ];
  }
}
