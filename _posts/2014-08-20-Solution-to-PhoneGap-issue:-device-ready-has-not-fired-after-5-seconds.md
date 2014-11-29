---
title: "Solution to PhoneGap issue: 'device ready has not fired after 5 seconds'"
date: 2014-08-20
layout: post
---

When you develop a hybrid application with PhoneGap, Cordova, Ionic, CordovaChromeApps and any other framework that is built on top on PhoneGap, I can almost assure you that you'll get this error. And it's super annoying.

I **think** the issue is when you delete your platforms folder, or the files inside, and do a `platform add ...` afterwards. This is at least how I reproduced it.

You'll need to:

1) add the platforms with `cordova platform add ios android`

2) remove them with `cordova platform remove ios android`

3) add them again.

I know this is super weird, but I think it's related to a faulty **android.json** and **ios.json** inside the platforms folder.

Following the steps above fixed the issue for me.

I would like to know if you encountered a similar error, if you solved it with this guide or you went a totally different path.
