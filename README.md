# hugo_theme_amatsukaze - Hugo Theme

## Install Hugo

```
$ git submodule add https://github.com/sugumura/hugo_theme_amatsukaze.git themes/hugo_theme_amatsukaze
# config.goml
# theme = "hugo_theme_amatsukaze"

# update theme
$ git submodule foreach git pull origin main
```

## Development

- Node 12

```
$ npm install
$ npm run build
# => generate /static/js/bundle.js
```

## Production

generate minify js

```
$ npm run build:prod
```

## LICENSE

MIT
