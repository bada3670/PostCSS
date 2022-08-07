# Using PostCSS

## What Did I Install

I used 'npm'. If you don't have it, you need to install Node.js.

Please check the 'package.json' file.

## Applying the Plugins

You can check the plugins in the website.

I used 'postcss.config.js' file. In that file, CommonJS was used.

## Executing

In the 'package.json', I made a script.

```json
"scripts": { "postcss:watch": "postcss src/style.css --dir public --watch" }
```

If you run that, there will be 'style.css' in 'public' folder.

## Structure

'src/style.css' imports css files in 'export' folder, and then transpiled into 'style.css'.

## Plugins I Used

I used "postcss-import" and "postcss-preset-env". If you check the 'postcss.config.js' file and each css files, you can see the explanations.
