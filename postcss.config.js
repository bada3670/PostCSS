module.exports = {
  plugins: [
    // about 'postcss-import'
    // This makes one css file importing other css files possible.
    require('postcss-import'),

    // about postcss-preset-env
    // This plugin includes 'autoprefixer' plugin.
    // The lesser the stage is, the bigger change will be applied.
    // After you change the stage, you have to restart postcss.
    require('postcss-preset-env')({ stage: 1 }),
  ],
};
