<?php

namespace App\Traits;

use Exception;

use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;

trait HasSingleFileUpload
{
  protected $imageWidth = 1280;
  protected $imageHeight = 720;

  protected $fileType = "image";

  /**
   * Faz o upload e devolve o nome
   *
   * @param UploadedFile $file
   * @param string $name
   * @param string $dir
   * @param string $disk
   * @return string|boolean
   * @author Fábio Neis <fabio@ezoom.com.br>
   */

   private function diskOrDefault($disk)
  {
    return $disk ? $disk : config('filesystems.default');
  }

  private function fileDeleted(string $filePath, string $disk): bool
  {
    return $filePath && !Storage::disk($disk)->exists($filePath);
  }

  private function normalizeFilePath(string $filePath, string $disk): string
  {
    $filePath = $this->removeUrl($filePath);
    $filePath = $disk == 'local' ? str_replace('/storage/', '', $filePath) : $filePath;

    return $filePath;
  }

  public function uploadFile(
    UploadedFile $file,
    string $name = null,
    string $dir = null,
    string $disk = null
  ): string|bool {
    $disk = $this->diskOrDefault($disk);
    $uuid = uniqid(date('HisYmd'));

    // Se temos nome, geramos slug + uniqid
    $name = ($name) ? Str::slug(Str::words($name, 6)) . '-' . $uuid : $uuid;

    // Recupera a extensão do arquivo
    $extension = $file->extension();

    // Define o nome
    $fileName = "{$name}.{$extension}";

    // Se não especificar o diretório pegamos a primeira parte da url
    $dir = $dir ?? request()->segments()[1];

    $upload = null;
    if ($extension == 'gif') {
      if ($file->storeAs($dir, $fileName, 'public'))
        $upload = $dir . '/' . $fileName;
    }

    if (in_array($extension, ['jpg', 'jpeg', 'png', 'webp'])) {
      // Se for imagem, já redimensionamos antes de enviar
      $imageManager = new ImageManager;
      $img = $imageManager->make($file->path());
      $file = $img->resize($this->imageWidth, $this->imageHeight, function ($const) {
        $const->aspectRatio();
        $const->upsize();
      })->encode();

      if (Storage::disk($disk)->put($dir . '/' . $fileName, $file, 'public'))
        $upload = $dir . '/' . $fileName;
    } else {
      // Faz o upload
      if (Storage::disk($disk)->putFileAs($dir, $file, $fileName, 'public'))
        $upload = $dir . '/' . $fileName;
    }

    if ($dir == 'produtos') {
      return $fileName;
    }

    // Se funcionou o arquivo foi armazenado em storage/app[/public]/$dir/nomearquivo.extensao
    return $upload;
  }

  public function deleteFile(string $filePath = null, string $disk = null): bool
  {
    $disk = $this->diskOrDefault($disk);

    if (!$filePath) {
      return false;
    }

    if ($this->fileDeleted($filePath, $disk)) {
      return true;
    }

    $filePath = $this->normalizeFilePath($filePath, $disk);

    $status = Storage::disk($disk)->delete($filePath);

    return $status;
  }

  public function deleteModelFile(Request $r)
  {

    try {
      $data = $r->all();
      $uuid = $data['uuid'];
      $field = $data['field'];
      $model = $this->model->byUuid($uuid)->firstOrFail();
      $base_dir = realpath($_SERVER["DOCUMENT_ROOT"]);

      // fileName na descrição
      // 1.foto ... 1 é o ID do lang
      if ($field[1] == '.') {

        $partes = explode(".", $field);
        $idx = (int) $partes[0];
        $fld = $partes[1];

        $descr = $model->descriptions[$idx];

        $fileName = $descr->$fld;

        unlink("$base_dir/uploads/$fileName");
        $descr->$fld = null;
        $descr->save();

        // fileName no modelo
      } else {

        if ($model->$field) {
          $fileName = $model->$field;
          unlink("$base_dir/uploads/$fileName");
          $model->$field = null;
          $model->save();
        }
      }

      // TODO: fazer um retorno normalizado com status e mensagens
      // igual tinha no antigo cms
      return "ok";
    } catch (\Exception $e) {
      dd($e->getMessage());
    }
  }

  public function copyFile(string $filePath, string $disk = null): string|bool
  {
    $disk = $this->diskOrDefault($disk);
    $filePath = $this->normalizeFilePath($filePath, $disk);

    $fileUuid = uniqid(date('HisYmd'));

    $fileExtension = substr($filePath, -4);
    $fileName = substr($filePath, 0, -4);
    // Remove o último
    $names = explode('-', $fileName);
    array_pop($names);

    if (empty($names)) {
      $dir = request()->segments()[1];
      $newFileName = $dir . '/' . $fileUuid . $fileExtension;
    } else {
      $newFileName = implode('-', $names) . '-' . $fileUuid . $fileExtension;
    }

    $status = Storage::disk($disk)->copy($filePath, $newFileName);
    return $status ? Storage::disk($disk)->url($newFileName) : $status;
  }

  public function removeUrl(string $file, string $disk = null): string
  {
    return url_remove_basepath($file, $disk);
  }

  private function createFile(
    string $name,
    string $extension,
    string $content,
    string $dir = null,
    string $disk = null
  ): string {
    $disk = $this->diskOrDefault($disk);
    $uuid = uniqid(date('HisYmd'));
    $name = ($name) ? Str::slug(Str::words($name, 6)) . '-' . $uuid : $uuid;
    $fileName = "{$name}.{$extension}";
    $dir = $dir ?? request()->segments()[0];

    $upload = null;

    if (Storage::disk($disk)->put($dir . '/' . $fileName, $content, 'public'))
      $upload = $dir . '/' . $fileName;

    return $upload ? Storage::disk($disk)->url($upload) : $upload;
  }

  public function checkThenUpload(Request $request, string $field, ?string $currentValue): ?string
  {
    $res = null;

    if ($request->hasFile($field) && $request->file($field)->isValid()) {
      $upload = $this->uploadFile(
        $request->file($field)
      );

      if (!$upload)
        throw new Exception(__('Falhou ao enviar a imagem'));

      $res = $upload;

      if ($res != $currentValue) {
        $this->deleteFile($currentValue);
      }

      return $res;
    }

    if ($request->input($field . '_remove', 0) == 1 && $currentValue) {
      if ($this->deleteFile($currentValue)) {
        return $res;
      }
    }

    return $currentValue;
  }
}
  