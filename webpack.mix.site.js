const mix = require("laravel-mix");
const ESLintPlugin = require("eslint-webpack-plugin");
const fs = require("fs");

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
  src: "resources/", // source files
  src_assets: "resources/assets/", // source assets files
  dist: "public/", // build files
  dist_assets: "public/assets/", // build assets files
};

//mix.setPublicPath(folder.dist_assets + 'site');

// Touching js file so they exists in the filesystem before mix starts. Otherwise the combined JS file would stay empty.
fs.writeFile(folder.dist_assets + "site/js/app.js", "", function (err) {
  if (err) throw err;
});

//
// GERAL - Compila os css/js
//

mix.sass(
  folder.src_assets + "site/scss/app.scss",
  folder.dist_assets + "site/css"
);
mix.js(folder.src_assets + "site/js/app.js", folder.dist_assets + "site/js");

mix.sass(
  folder.src_assets + "site/scss/home.scss",
  folder.dist_assets + "site/css"
);
mix.js(folder.src_assets + "site/js/home.js", folder.dist_assets + "site/js");

mix.sass(
  folder.src_assets + "site/scss/assistance/assistance.scss",
  folder.dist_assets + "site/css/assistance"
);
mix.js(
  folder.src_assets + "site/js/assistance/assistance.js",
  folder.dist_assets + "site/js/assistance"
);

mix.sass(
  folder.src_assets + "site/scss/attendance/attendance.scss",
  folder.dist_assets + "site/css/attendance"
);
mix.js(
  folder.src_assets + "site/js/attendance/attendance.js",
  folder.dist_assets + "site/js/attendance"
);

//
// Combina o lazyload
//
mix.combine(
  [
    folder.dist_assets + "site/js/app.js",
    folder.src_assets + "site/js/lazyload.js",
  ],
  folder.dist_assets + "site/js/app.js"
);

//
// Demais configurações
//

// Não move imagens do css para a public
// mix.options({ processCssUrls: false });

// configura o eslint
const options = {
  extensions: [`js`, `vue`],
  exclude: [`/node_modules/`],
};
mix.webpackConfig({
  plugins: [new ESLintPlugin(options)],
});

// Quando rodar produção, executa os comandos abaixo
if (mix.inProduction()) {
  // imagens
  mix.copyDirectory(
    folder.src_assets + "/site/img",
    folder.dist_assets + "/site/img"
  );

  mix.version();
}
