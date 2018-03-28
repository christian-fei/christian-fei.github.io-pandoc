## requirements

- bundle (ruby)
- npm (node)

## setup

```
bundle
npm i
```

## add new post

```
./jekyll-new-post Title of the blog post
```

## add new discover

```
./new-discover "title" "description" "url"
./new-discover "title" "url"
```

## build site

```
npm run build:site
```

## build assets

```
npm run build
# or
npm run build:js
npm run build:css
```

## development

```
bundle exec jekyll serve

npm run build:js:watch
npm run build:css:watch
```
