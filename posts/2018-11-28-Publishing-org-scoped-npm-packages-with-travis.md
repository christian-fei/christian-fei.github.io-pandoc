---
title: Publishing org scoped npm packages with travis
---

If you stumbled upon this article, you are probably experience the following error message on travis in the deployment stage:

```
Deploying application
npm ERR! publish Failed PUT 402
npm ERR! code E402
npm ERR! You must sign up for private packages : @christian_fei/pocket-sync
```

Btw, this is the `.travis.yml` configuraiton:

```
language: node_js
node_js:
  - "10"
script:
  - echo "deploying to npm"
deploy:
  provider: npm
  email: crifei93@gmail.com
  api_key: $NPM_TOKEN
  on:
    tags: true
```

---

To fix it, open your `package.json` and add the following configuration:

```
  "publishConfig": {
    "access": "public"
  },
```