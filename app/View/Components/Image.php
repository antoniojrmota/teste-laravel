<?php

namespace App\View\Components;

use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\View\Component;

use Intervention\Image\ImageManagerStatic as ImageManager;

class Image extends Component
{
  public $image = null;
  public $im = null;


  public function __construct(
    public string $method = 'canvas',
    public ?string $src = null,
    public ?int $w = null,
    public ?int $h = null,
    public ?string $class = null,
    public ?string $background = null,
    public ?string $text = null,
    public ?string $color = '#000000',
    public ?int $lazyload = null,
    public ?int $lazyloadBackground = 0,
    public ?string $xRef = null,
    public ?string $alt = null,
    public ?int $fontSize = 13
  ) {

    // Se não tem dimensões não precisa fazer nada
    if (!$w && !$h)
      return;

    // Tenta abrir o arquivo, se falhar abre o padrão
    try {
      $this->im = ImageManager::make($src);
    } catch (Exception $e) {
      Log::info($e->getMessage());
      $this->im = ImageManager::make('assets/site/img/no-image.jpg');
    }
  }

  private function resizeCanvas()
  {
    $this->im->resizeCanvas($this->w, $this->h, 'center', true);
  }

  private function placeholder()
  {
    $this->im = ImageManager::canvas($this->w, $this->h, $this->background);

    if ($this->text === NULL)
      $this->text = sprintf("%sx%s", $this->w, $this->h);

    $this->im->text($this->text, $this->w / 2, $this->h / 2, function ($font) {
      $font->size($this->fontSize);
      $font->color($this->color);
      $font->file(base_path('resources/assets/cms/fonts/roboto-thin.ttf'));
      $font->align('center');
      $font->valign('middle');
    });
  }

  private function canvas()
  {
    $this->im->resize($this->w, $this->h, function ($constraint) {
      $constraint->aspectRatio();
      $constraint->upsize();
    });

    $w = ($this->h && !$this->w) ? $this->h : $this->w;
    $h = ($this->w && !$this->h) ? $this->w : $this->h;

    $this->im = ImageManager::canvas($w, $h)
      ->insert($this->im, 'center');
  }

  private function resize()
  {
    $this->im->resize($this->w, $this->h, function ($constraint) {
      $constraint->aspectRatio();
      $constraint->upsize();
    });
  }

  private function fit()
  {
    $this->im->fit($this->w, $this->h, function ($constraint) {
      $constraint->aspectRatio();
      $constraint->upsize();
    });
  }

  public function render()
  {
    if (!$this->w && !$this->h) {
      $this->image = $this->src;
    } else if (method_exists($this, $this->method)) {
      $this->{$this->method}();
      $this->image = $this->im->encode('data-url');
    } else
      throw new Exception("Método desconhecido", 1);

    return view('components.image');
  }
}
