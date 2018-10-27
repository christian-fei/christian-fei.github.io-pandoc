---
title: 'pm2 deploy shallow git repository with --depth, also known as fetch: fast'
date: 2018-07-03
layout: post
category: posts
---

I found it. It found me...

Whatever!

I came across the **only** documentation about cloning a git repo with the [`--depth` option](https://git-scm.com/docs/git-clone#git-clone---depthltdepthgt), to create a ["shallow"](https://www.google.com/search?q=define+shallow) copy with the specified number of commits truncated from `HEAD`.

<pre>
  if test <b>fetch != "fast";</b> then
    log "full fetch"
    run "git clone $repo $path/source"
  else
    log "fast fetch"
    run "git clone <b>--depth=5</b> --branch $branch $repo $path/source"
  fi
</pre>

Found in the source code of [pm2-deploy](https://github.com/Unitech/pm2-deploy/blob/master/deploy#L217-L223).

Apart from the **IRRATIONAL INVERTED IF STATEMENT ™** there, it seems to do it's job. (Why wouldn't you simply test for the truthy condition and invert both branches?)

## Usage in pm2 `ecosystem.config.js`

I found that you can just specify `"fetch": "fast"` in your pm2 ecosystem configuration.

This means that it would fetch the *last 5 commits* from the `HEAD` (as you can see above).

Good enough for me.

<pre>
  ...
  deploy : {
    production : {
      <b>fetch: 'fast',</b>
      user: 'node',
      host: '0.0.0.0',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/app',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
  ...
</pre>

If you know any place where this is documented, please reach on Twitter [@christian_fei](https://twitter.com/christian_fei) and send me a link 📖

Maybe a PR would be nice in the future, let's see.
