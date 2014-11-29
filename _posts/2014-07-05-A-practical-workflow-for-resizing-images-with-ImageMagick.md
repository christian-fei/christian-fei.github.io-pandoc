---
title: "A practical workflow for resizing images with ImageMagick"
date: 2014-07-05
layout: post
---

Resizing an image to the desired size and proportion sounds like a simple process, but I found it quite challenging using Preview since I don't own a legitimate copy of Photoshop.

Fortunately I came across a nice tool that exists since the archaic times of computers (for me at least), since 1999, that gives me very handy commands to solve this workflow. It's called [ImageMagick](http://www.imagemagick.org/).


### An example workflow

Without leaving the terminal, I would like to make a small icon (eventually a base64 encoded one) of this image:

![github octocat](https://assets-cdn.github.com/images/modules/logos_page/Octocat.png)

---


First step, install [imagemagick](http://imagemagick.org) with your favourite package manager.

Then download a Github Octocat to your PC:

```
wget https://assets-cdn.github.com/images/modules/logos_page/Octocat.png -O octocat.png
```

The image will be available under the name **octocat.png**.

---


I would like to have a bit more information about the format, dimensions etc. of this image:

```
identify octocat.png
```

Output:

```
octocat.png PNG 800x665 800x665+0+0 8-bit sRGB 43.7KB 0.000u 0:00.000
```

---

Ok, this is way to big for an icon, it's 800 px wide and 665 px tall.
So it's rectangular, that's not usual for an icon.

So I check the documentation for *convert* (a small tool to convert/resize/etc images) with `man convert`.

---

After some research and trial-and-error I found the command to resize the image, keep the aspect ratio without the excess whitespace, and to leave the PNG transparent.

The command with it's arguments is the following:

```
convert   # the utility
  -resize 32x32   # new geometry/size of the image
  -extent 32x32   # since resize will try to retain the aspect ratio, we extend the whitespace to this size
  -gravity center   # place the image centered horizontally and vertically
  -background transparent   # retain the transparent background
  octocat.png   # the input image
  octocat_icon.png   # the output image
```




#### optional: base64 encoding

You could link in your CSS to the asset itself.
But for further performance improvements, we can avoid one HTTP roundtrip with an inline base64 encoded image.
**do not over do it, or Souders will haunt you**

On my mac I have a tool called `base64` bundled with OpenSSL.

We can use this to convert anything into a base64 encoded string.

```
base64 octocat_icon.png
```



And in your CSS (stylus) you could create an icon-class like this:

```
size_icon = 1em

[class^="icon"]
  display inline-block
  width size_icon
  height @width
  background-size 100%
  background-repeat no-repeat
  vertical-align middle

.icon-octocat
  background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAFwklEQVRYw+2XT4wbVx3HP+/NjMfjXXvH+8+bzWbHbXY3JQmbTZOItCkQShogFNGGIlAPKIccilpxqLghbo0icYAiDhzYACoXpCIR/lVqGyioSGkRaYJI0u4mJLZ3m8Sb3Y3ttdee8cw8DrZLWmXt/DlwgK/05jDz9Pt93u993/vZ8H/9lyU6TUg7zpeBjcBrwPlMNht2mJ8C9gGDwLFMNlu6a4C040SBXwOfBzLAS8DLwACwAUgAClgGskAaeA7YAVSAxzLZ7Kl2OfQOBYgBwy0e4DvAN4EuwLppASGwChiAedPihjpVuBNAvbmSlrTm6j8qCXR/5J0PVDsByA7fo7cxZy1FgF1px2m7zZ2CfwPYdZcAGvAtYKrdpDW3IO04NvBUCzJUCqXUB5uuPngAgg+9l0IghICGf74InL5jACBFw3gopXBS/ezZton+njieH1Cu1qi5HkIIYlGT7lgUKSB3bYk3z7zLjZVKC2JL2nHkWse3HYAB6KFSjI0MceTZp9k2OYludeOXrhPW64SqUQIpBNKIoCf68SolXjnxZ1449iuK5VWEEFazircEaOeBKuBKIfj6/kd4cOtm/FiKS+dzeMICIZBSIqUEIahrXVx+dx7PSHJg78M8uvPjLcDqWsk/VIGmW1sDoKjgWjRirB8bXYcwLfIzF5j5w2+wnvgS/YMxVBA0LCA1ivlFZl75LcG+zzG+dZSx0XWIRqh8M77etIgCVCabVQB62nE0IEnj2Gg3DSngnO8HOworFQh8zK4YXYNDWD1xCOuEQYgQIITAjFnE+geJp1KEdY9SpYpChSCuNL0kgKA10o7jAjc027YlEG9WQ9G4fGpAGcj6QfCoaRjJT24bpyc1yLrJKUyqqKBO6foSYRBgRE3MqMn6nbuJd+sUF65w7PgJ3s8vnZFSHAWWaFxMYROk5YlVzbbtFlkJKAIrmWy2UigWa4Vicc627czctcVdNbfeO5q06JYemgoRKPyqi5SSaJeFUAHUily/1kj+6lunLyqlns/mcm8XisVqoVis2LZdBlaavqgD/i1vqaG+XmnGuvYkBlL17mTv33PvnZ8wDf3QA+mRx7aOjTrDg73xRMzSNUBISQhUXa+eXy6U/3khO/+P2cyJmuf9dHzD8Nk3Tv6NdrolwNHXT2l/mn7x2YXLF75mxXt+/tYfX/0Jmik0Q08mYtZ2TYof6Zr8mNQ0AHzfx3W9dwKlnq+6/rmgXl8m9Nq27bbHcHhiizz0w5fe9KrVI16t+tynHj+4f2QwKYJaZdlOxDd2xazxaDRKxDDciGF4VjRKd1dss6lrfYFbWbzd5GtWoKW4hja0cdML3X0DhyJW7GQYBNy4+v4e361qgAcs0Gi/CcBWSn0/m8t993aTQ4d2vBIQ2OXSUd9z85oReVwpFam7ri+lyNEwUaQZYwYYbt56d6SOrXbuytWSW1558Xru8oHMxQv7pBSv0TiuIf9pR34T6I7V6QcJAFcWl/jFfF0Gvj/yg69+pj8MgyEhZV2AFfi+HrFihrta6Yn1JEeOvJ15oFoqzgPlwxP2vQNMzxb6gIPuauVJIeTkyJZtgzeuzhuabuB7Lr7rEu9PDZSXF9iwZftX3Ep5L/Ae8Pvp2cIvD0/Y83e9BdOzhXXAz4AfA1+49M7J9flLF437dzyEHjFb7RYjGuW+7bvJnTujz509nRJCfBr4HvDy9Gxh871UYArYD2gohdBMdj39bey+BDN/fYNNj3wWt1Imd/YUO556huT4QyAjLWMIYDewFzh/twCngOPAQYQw7pt6kPiiT/7SRSafeIaxnZ8gCAISzhReYHL/zofp69VRYQgNk/4FeL1dgo5/TKZnCwngAPAksH1x0UvVfRWTQmqKUCgFmqbh+0EQNUW1tzeyCJwFfgccPzxhL9wTwE0gEWA4n3fHlMJRSqWEoFsppBCiAmpB12V2YCDyL6WYOzxh12439v+2/g3FcjhFTpWYoAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNC0wNy0wNVQxNTo0Mjo0NCswMjowMPi/iSoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTMtMTAtMjlUMDg6MjI6MDQrMDE6MDAUFRaLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg==')

```




