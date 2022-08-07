module.exports = {
  plugins: [
    // about 'postcss-import'
    // This makes import other css files.
    // Unlike general CSS @import,
    // This shows the whole codes.
    // We need this process because we have to change this file into the file we want.
    // e.g.) src/style.css -> public/style.css
    require('postcss-import'),

    // about postcss-preset-env
    // This plugin includes 'autoprefixer' plugin.
    // The lesser the stage is, the bigger change will be applied.
    // After you change the stage, you have to restart postcss.
    require('postcss-preset-env')({ stage: 1 }),
  ],
};
