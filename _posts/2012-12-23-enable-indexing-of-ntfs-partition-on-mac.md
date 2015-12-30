---
desc: "Understand how to enable indexing of a NTFS partition on Mac OS X mountain lion, snow leopard"
date: 2012-12-23 12:00:37
layout: post
category: posts
title: How to index a NTFS partition on Mac
---

Recently I found myself in a strange situation, where I was searching for a certain document located on my NTFS Data partition, but Spotlight wasn't able to find it.

______________


I have Paragon NTFS for Mac installed, and I thought that with this Spotlight could understand NTFS, but it didn't.

With a tool called `mdutil` you can check if indexing is enabled on a specific partition or drive.

``` mdutil -s /Volumes/DRIVE_NAME ```

The flag `-s` stands for **status**, so check if indexing is enabled on your desired partition:
<img data-echo="https://s3-eu-west-1.amazonaws.com/cf.img/posts/2012/12/mdutil.png">

To turn indexing on just run the following command:

``` sudo mdutil -i on /Volumes/DRIVE_NAME ```

Good, now the only thing left to do is rebuilding the index.

To do that simply run this in your terminal:

``` mdutil -E /Volumes/DRIVE_NAME ```

Now either restart your system or wait until Spotlight schedules a new index refresh.


##Update

Ale Mello suggested to the following method:

- In your System preferences navigate to Spotlight > Privacy

- Add the drive you want to be indexed by Spotlight (if already in the list, remove and then add the drive)

- Spotlight will now reindex the drive.
