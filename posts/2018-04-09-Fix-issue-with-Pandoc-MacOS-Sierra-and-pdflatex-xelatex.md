---
title: 'Fix issue with Pandoc, MacOS Sierra and pdflatex / xelatex'
date: 2018-04-09
layout: post
category: posts
---

After some time, I picked up a project where LaTeX was involved, to find out it didn't work anymore.

I couldn't run the script with the `pandoc` command, a few errors came up.

## deprecated option `--latex-engine`

One was about a deprecated options, namely `--latex-engine`, which is now `--pdf-engine`:

```
--latex-engine has been removed.  Use --pdf-engine instead.
```

To fix this issue, simply use the new flag `--pdf-engine`.

### cannot-use-pdftex

Unfortunately, also the typesetting was not correct, I had to use another pdf engine.

The error was:

```
! Fatal fontspec error: "cannot-use-pdftex"
!
! The fontspec package requires either XeTeX or LuaTeX.
!
! You must change your typesetting engine to, e.g., "xelatex" or
! "lualatex"instead of plain "latex" or "pdflatex".
```

### install packages

> Note: `brew` and `brew-cask` are required.

With the following packages I was able to compile my PDFs:

```
brew cask install BasicTeX
brew install pandoc
sudo tlmgr update --self
sudo tlmgr install collection-fontsrecommended
```

