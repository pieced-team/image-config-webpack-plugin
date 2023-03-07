const mergeFn = require('lodash/merge');
const config = require('./config');

module.exports = class ImageConfigWebpackPlugin {
  constructor(options) {
    this.options = options;

    this.getOptions = this.getOptions.bind(this);
  }

  apply(compiler) {
    const { constructor, getOptions } = this;

    const cfg = config(getOptions(compiler));
    // Merge config
    compiler.hooks.afterEnvironment.tap(constructor.name, () => compiler.options.module.rules.push(...cfg.module.rules));
    cfg.plugins.forEach((plugin) => plugin.apply(compiler));
  }

  getOptions(compiler) {
    const isDevelopment = compiler.options.mode === 'development';
    const defaultOpt = {
      suffix: ['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'avif'],
      parser: {
        dataUrlCondition: {
          maxSize: isDevelopment ? undefined : 1000,
        },
      },
      generator: {
        filename: isDevelopment ? '[path][name][ext]' : 'static/images/[contenthash:10][ext]',
      },
    };
    return mergeFn({}, defaultOpt, this.options);
  }
};
