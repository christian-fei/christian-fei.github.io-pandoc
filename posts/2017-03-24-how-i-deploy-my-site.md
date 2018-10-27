---
title: 'how i deploy my site'
date: 2017-03-24
layout: post
category: posts
---

Related: Read [how I build my site](/posts/how-i-build-my-site/).

---

The static assets are hosted on [AWS S3](https://aws.amazon.com/s3/) on a bucket enabled for [static website hosting](http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html).

I use [Cloudflare](https://www.cloudflare.com/) as the CDN, Cache and it issues also the free HTTPS certificate for the site.

With the [aws-cli](https://github.com/aws/aws-cli) I deploy the static assets with one command:

```
npm run deploy
```

This command takes the files in the `_site` directory, where Jekyll spits out the compiled assets, and I sync them to the remote S3 bucket.

`npm run deploy` is the script defined in [`package.json`](https://github.com/christian-fei/christian-fei.github.io/tree/master/package.json) as:

```
aws s3 sync --acl public-read  --region eu-central-1 ./_site/ s3://christianfei.com
```
