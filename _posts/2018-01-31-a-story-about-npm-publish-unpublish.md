---
title: 'A story about npm publish / unpublish'
date: 2018-01-31
layout: post
category: posts
bg_image: /assets/images/posts/npm.svg
---

![npm](/assets/images/posts/npm.svg)

Today I sat down and wrote a tiny package called [wait-for-user-input](https://github.com/christian-fei/wait-for-user-input). it can be used to wait for `stdin` input in a command line script.

After I published the package on [registry.npmjs.org](http://registry.npmjs.org/), I noticed that I accidentally published it with the npm account from work..

## calm down.

[docs.npmjs.com/cli/unpublish](https://docs.npmjs.com/cli/unpublish) to the rescue!

> If no version is specified, or if all versions are removed then the root package entry is removed from the registry entirely.

So I ran a few `npm unpublish` by decrementing the version in the `package.json`, and the package was removed from npm.

## npm, tell me who am i 👍

`npm whoami` prints the username of the currently logged in user on the shell.

After a `npm login` command with my personal account credentials, I double checked that I was logged in with my personal account.

```
~/D/p/wait-for-user-input (master) npm whoami
christian_fei
```

## npm publish 👎

I was almost ready to publish to npm, but I was blocked by this error:

```
~/D/p/wait-for-user-input (master) npm publish
npm ERR! publish Failed PUT 403
npm ERR! code E403
npm ERR! wait-for-user-input cannot be republished until 24 hours have passed. : wait-for-user-input
~/D/p/wait-for-user-input (master)
```

In fact, on [docs.npmjs.com](https://docs.npmjs.com/cli/unpublish) it's clearly written that:

> with the default registry (registry.npmjs.org), unpublish is only allowed with versions published in the last 24 hours. If you are trying to unpublish a version published longer ago than that, contact support@npmjs.com.

## next steps

So, now I need to:

- ~wait 24 hours~
- ~publish again under the correct npm account~

[~Tomorrow I'll update the article.~](#it-worked)

Check out [the updated section](#it-worked)!

## how to avoid

is there a prepublish hook that could check that the usernames from a github repo match the one on npm?

I don't know. Maybe one day I'll find it out and report back.

Do you know if there is a way to have multiple npm accounts on the same shell? (e.g. ~/.aws/credentials)

## ⚡️ it worked!

[![NPM](https://nodei.co/npm/wait-for-user-input.png)](https://npmjs.org/package/wait-for-user-input)

[wait-for-user-input](https://www.npmjs.com/package/wait-for-user-input) is available on npm!

(under the correct account this time 😅)