const path = require('path');
var prod = process.env.NODE_ENV === 'production';

let curcompilefolder = "src";

module.exports = {
  wpyExt: '.wpy',
  eslint: false,
  cliLogs: !prod,
  build: {
    // web: {
    //   htmlTemplate: path.join('src', 'index.template.html'),
    //   htmlOutput: path.join('web', 'index.html'),
    //   jsOutput: path.join('web', 'index.js')
    // }
  },
  resolve: {
    alias: {
      counter: path.join(__dirname, `${curcompilefolder}/components/counter`),
      '@': path.join(__dirname, `${curcompilefolder}`)
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules']
  },
  compilers: {
    sass: {
      outputStyle: 'compressed'
    },
    // postcss: {
    //   plugins: postcssplugins
    // },
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions',
      ]
    }
  },
  plugins: {
    'rw-postcss': {},
    // 插件示例
    'replace': {
      filter: /app.js$/,
      config: {
        find: /'\s*use\s+(\w+)\s*'/g,
        replace: function (matchs, word) {
          if (word === "INI") {
            return `const {INI} = require('./ini.js')`;
          }
          return '';
        }
      }
    },
    // 自定义插件示例
    // 'auidef': {
    //   filter: new RegExp('app\.(js)$')
    // }
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
};

if (prod) {

  // 压缩sass
  // module.exports.compilers['sass'] = {outputStyle: 'compressed'}

  // 压缩js
  module.exports.plugins = {
    uglifyjs: {
      filter: /\.js$/,
      config: {
      }
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80
        },
        png: {
          quality: 80
        }
      }
    }
  }
}
