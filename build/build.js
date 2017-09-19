require('shelljs/global');
require('./check-versions')();

process.env.NODE_ENV = 'production';

const ora = require('ora');
const rm = require('rimraf');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = require('./webpack.prod.conf');

const spinner = ora('building for production...');
spinner.start();
const assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory);

console.log('\ncopyingggg\n');
console.log(path.join(assetsPath,'img'));

rm(assetsPath, err => {
  if (err) throw err
  //开发插件的配置 TODO: 待优化
  webpack(webpackConfig, function (err, stats) {
    mkdir(path.join(assetsPath,'img'));
    cp('-R','chrome/img/*', path.join(assetsPath,'img'));
    cp('-R','chrome/manifest.json', config.build.assetsRoot);
    cp('-R', 'static/*', assetsPath);
    spinner.stop();
    if (err) throw err;
    process.stdout.write(stats.toString({
          colors: true,
          modules: false,
          children: false,
          chunks: false,
          chunkModules: false
        }) + '\n\n');

    console.log(chalk.cyan('  Build complete.\n'));
    console.log(chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
        '  Opening index.html over file:// won\'t work.\n'
    ))
  })
});
