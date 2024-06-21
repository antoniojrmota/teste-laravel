<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class YoutubeRule implements Rule
{
  /**
   * Valida a url
   *
   * @param  string  $attribute
   * @param  mixed  $value
   * @return bool
   */
  public function passes($attribute, $value)
  {
    return (bool) preg_match('/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/', $value);
  }

  /**
   * Get the validation error message.
   *
   * @return string
   */
  public function message()
  {
    return 'O :attribute não parece ser uma url do youtube.';
  }
}
