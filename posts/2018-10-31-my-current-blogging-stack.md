---
title: my current blogging stack
---

## tldr;

- jekyll 👉 pandoc
- pandoc + bash (see [`./write`](https://github.com/christian-fei/christian-fei.github.io/blob/master/write), [`./build`](https://github.com/christian-fei/christian-fei.github.io/blob/master/build), [`./deploy`](https://github.com/christian-fei/christian-fei.github.io/blob/master/deploy) and [`./purge`](https://github.com/christian-fei/christian-fei.github.io/blob/master/purge))
- aws s3
- cloudflare dns + ssl



# keep it simple, stupid

past week end i started the migration from jekyll to pandoc (inspiration from [this dev.to link](https://dev.to/gypsydave5/write-and-deploy-a-super-fast-web-site-in-30-seconds-with-no-framework-4lab)).

i wanted to get rid of the bulky jekyll blog with lots of config, gems and dependencies.

> although with pandoc i still have a dependency to a tool, it's a **standalone** software you can install with brew, so it's fine

# utilities for common tasks

the next step was to implement just the things needed to make a DIY blog with pandoc.

here is where the above mentioned bash scripts come in:

## `./write hello world`

now, whenever i come up with a decent blog post i start with a concise title to focus on the topic.

i can execute this on my terminal and it will pop up my editor for the new blog post under the [`posts/`](https://github.com/christian-fei/christian-fei.github.io/tree/master/posts) folder:

```
~/D/p/christian-fei.github.io (master) ./write hello world

📝  write

> creating posts/2018-11-01-hello-world.md

~/D/p/christian-fei.github.io (master)
```

[check out `write` here](https://github.com/christian-fei/christian-fei.github.io/tree/master/write)

## `./build`

this command goes through all the markdown files and converts them with `pandoc` to static html pages.
each has a reference to the shipped styles and assets and I could even link some js utility to them.

it puts the built site under the `dist/` folder. additionally this is the folder used under development served with [`npx serve dist/`](https://www.npmjs.com/package/serve).

here is an example output:

```
~/D/p/christian-fei.github.io (master ⚡) ./build

💯  build

⛏ index page
⛏ about page
⛏ building posts
..............................................................................
⛏  nice posts urls
..............................................................................
⛏ copying assets
⛏ copying styles
```

[check out `build` here](https://github.com/christian-fei/christian-fei.github.io/tree/master/build)

## `./deploy`

it puts the files under the `dist/` folder to my s3 bucket, hooked up with my dns + ssl provider [cloudflare.com](https://cloudflare.com).

```
~/D/p/christian-fei.github.io (master ⚡) ./deploy

🚀  deploy

upload: dist/index.html to s3://christianfei.com/index.html
upload: dist/about.html to s3://christianfei.com/about.html
upload: dist/about/index.html to s3://christianfei.com/about/index.html
upload: dist/assets/images/cf.128x128.png to s3://christianfei.com/assets/images/cf.128x128.png
upload: dist/main.css to s3://christianfei.com/main.css
upload: dist/posts/index.html to s3://christianfei.com/posts/index.html
upload: dist/posts/2013-04-21-berlin-april-2013.html to s3://christianfei.com/posts/2013-04-21-berlin-april-2013.html
upload: dist/posts/2013-04-21-berlin-april-2013/index.html to s3://christianfei.com/posts/2013-04-21-berlin-april-2013/index.html
...
```

[check out `deploy` here](https://github.com/christian-fei/christian-fei.github.io/tree/master/deploy)

## `./purge`

this is used to purge the cache for the domain [`christianfei.com`](https://christianfei.com) through the Cloudflare rest api:

```
~/D/p/christian-fei.github.io (master ⚡) ./purge

💥  purge cache for https://christianfei.com

{
  "result": {
    "id": "5309943dc0a486cbf246fe039a1f7277"
  },
  "success": true,
  "errors": [],
  "messages": []
}
```

[check out `purge` here](https://github.com/christian-fei/christian-fei.github.io/tree/master/purge)

# wrapping it up

i am glad of the results. it's super lightweight and smooth (once you figure out how to include a html template in your posts and understand the full potential of `pandoc`).

it's a lightweight setup, with the bare minimum that i need, so I encourage you to fork away and give me feedback [on twitter](https://twitter.com/christian_fei)!

✌️
