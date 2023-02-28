const config = require('#config');

const defaultOptions = (isDevelopment) => ({
  suffix: ['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'avif'],
  parser: {
    dataUrlCondition: {
      maxSize: isDevelopment ? undefined : 1000,
    },
  },
  generator: {
    filename: isDevelopment ? '[path][name][ext]' : 'static/images/[contenthash:10][ext]',
  },
});

module.exports = class ImageConfigWebpackPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    const cfg = config({
      ...defaultOptions(compiler.options.mode === 'development'),
      ...this.options,
    });
    // Merge config
    compiler.hooks.afterEnvironment.tap('ImageConfigWebpackPlugin', () => compiler.options.module.rules.push(...cfg.module.rules));
    cfg.plugins.forEach((plugin) => plugin.apply(compiler));
  }
};
