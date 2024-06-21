const mix = require('laravel-mix');
const ESLintPlugin = require('eslint-webpack-plugin');

/*
  |--------------------------------------------------------------------------
  | Mix Asset Management
  |--------------------------------------------------------------------------
  |
  | Mix provides a clean, fluent API for defining some Webpack build steps
  | for your Laravel applications. By default, we are compiling the CSS
  | file for the application as well as bundling up all the JS files.
  |
 */

const folder = {
  src: 'resources/',               // source files
  src_assets: 'resources/assets/', // source assets files
  dist: 'public/',                 // build files
  dist_assets: 'public/assets/'    // build assets files
};

//
// CMS - Compila os css/js
//
mix.sass(folder.src_assets + 'cms/scss/bootstrap.scss', folder.dist_assets + 'cms/css');
mix.sass(folder.src_assets + 'cms/scss/bootstrap-dark.scss', folder.dist_assets + 'cms/css');
mix.sass(folder.src_assets + 'cms/scss/app.scss', folder.dist_assets + 'cms/css');
mix.sass(folder.src_assets + 'cms/scss/app-dark.scss', folder.dist_assets + 'cms/css');
mix.js(folder.src_assets + 'cms/js/app.js', folder.dist_assets + 'cms/js');
mix.js(folder.src_assets + 'cms/js/login.js', folder.dist_assets + 'cms/js');
mix.js(folder.src_assets + 'cms/js/register.js', folder.dist_assets + 'cms/js');
mix.js(folder.src_assets + 'cms/js/user.js', folder.dist_assets + 'cms/js');
mix.js(folder.src_assets + 'cms/js/banners.js', folder.dist_assets + 'cms/js');
mix.js(folder.src_assets + 'cms/js/produtos.js', folder.dist_assets + 'cms/js');
mix.js(folder.src_assets + 'cms/js/paginas.js', folder.dist_assets + 'cms/js');


// Cria o js do validade em um único arquivo e com tudo que precisa
mix.babel([
  'node_modules/jquery-validation/dist/jquery.validate.min.js',
  'node_modules/jquery-validation/dist/additional-methods.min.js',
  'node_modules/jquery-validation/dist/localization/messages_pt_BR.min.js'
], folder.dist_assets + 'libs/jquery-validation/jquery.validate.min.js');

//
// Components
//
mix.js(folder.src_assets + 'components/form/form-group-file.js', folder.dist_assets + 'components/form');
mix.js(folder.src_assets + 'components/form/form-file-image.js', folder.dist_assets + 'components/form');
mix.js(folder.src_assets + 'components/form/geo-point.js', folder.dist_assets + 'components/form');
mix.js(folder.src_assets + 'components/form/select2.js', folder.dist_assets + 'components/form');
mix.js(folder.src_assets + 'components/form/address.js', folder.dist_assets + 'components/form');
mix.js(folder.src_assets + 'components/gallery.js', folder.dist_assets + 'components');

//
// Demais configurações
//

// Não move imagens do css para a public
// mix.options({ processCssUrls: false });


// configura o eslint
const options = {
  extensions: [`js`, `vue`],
  exclude: [
    `/node_modules/`,
  ],
}
mix.webpackConfig({
  plugins: [new ESLintPlugin(options)],
});


// Quando rodar produção, executa os comandos abaixo
if (mix.inProduction()) {
  // #Boxicons
  mix.copy('node_modules/boxicons/css/boxicons.min.css', folder.dist_assets + '/libs/boxicons/css/boxicons.min.css');
  mix.copyDirectory('node_modules/boxicons/fonts', folder.dist_assets + '/libs/boxicons/fonts');
  // #Mdi
  mix.copy('node_modules/@mdi/font/css/materialdesignicons.min.css', folder.dist_assets + '/libs/mdi/css/materialdesignicons.min.css');
  mix.copyDirectory('node_modules/@mdi/font/fonts', folder.dist_assets + '/libs/mdi/fonts');
  // #jquery
  mix.copy('node_modules/jquery/dist/jquery.min.js', folder.dist_assets + '/libs/jquery/jquery.min.js');
  // #bootstrap
  mix.copy('node_modules/bootstrap/dist/js/bootstrap.min.js', folder.dist_assets + '/libs/bootstrap/bootstrap.min.js');
  // #Popper
  mix.copy('node_modules/@popperjs/core/dist/umd/popper.min.js', folder.dist_assets + '/libs/popperjs/popper.min.js');
  // #Inputmask
  mix.copy('node_modules/inputmask/dist/jquery.inputmask.min.js', folder.dist_assets + '/libs/inputmask/jquery.inputmask.min.js');

  // #FontAwesome
  // mix.copy('node_modules/@fortawesome/fontawesome-free/css/all.min.css', folder.dist_assets + '/libs/@fortawesome/fontawesome-free/css/all.min.css');
  // mix.copyDirectory('node_modules/@fortawesome/fontawesome-free/sprites', folder.dist_assets + '/libs/@fortawesome/fontawesome-free/sprites');
  // mix.copyDirectory('node_modules/@fortawesome/fontawesome-free/webfonts', folder.dist_assets + '/libs/@fortawesome/fontawesome-free/webfonts');

  mix.version();
}
