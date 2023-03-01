module.exports = (options) => ({
  module: {
    rules: [{
      test: new RegExp(`\\.(${options.suffix.join('|')})$`, 'i'),
      type: 'asset',
      generator: options.generator,
      parser: options.parser,
    }],
  },
  plugins: [],
});
