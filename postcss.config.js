module.exports = {
  plugins: [
    // about 'postcss-import'
    // This makes one css file import other css files.
    // Unlike general CSS '@import', this shows the whole codes.
    // We need the whole codes
    // because we have to change the importing file into the result file.
    // e.g.) src/style.css -> public/style.css
    require('postcss-import'),

    // about postcss-preset-env
    // This plugin includes 'autoprefixer' plugin.
    // The lesser the stage is, the bigger change will be applied.
    // After you change the stage, you have to restart postcss.
    require('postcss-preset-env')({ stage: 1 }),
  ],
};
