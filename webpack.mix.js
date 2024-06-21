const mix = require('laravel-mix');

// require(`${__dirname}/webpack.mix.${process.env.section}.js`);

const section = [
  'site',
  'cms'
];

for (let key in section)
  require(`${__dirname}/webpack.mix.${section[key]}.js`);

if (!mix.inProduction())
  mix.browserSync(process.env.APP_URL);
