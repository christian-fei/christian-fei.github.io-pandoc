---
desc: "Auto mount partition on Linux, super simple and easy way."
layout: post
category: posts
title: "Auto mount partition on Linux the easy way"
date: 2013-05-08 17:46:00
---


Let's get straight to the point:

First you need to find out the device file of the partition you want to automatically mount on start up.

_____________

##lsblk ftw

This is done by using a tool called lsblk (list block devices):

Just run

```
lsblk
```
in your terminal and you get something like this:
<hr>
<pre>
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda      8:0    0 232.9G  0 disk
├─sda1   8:1    0 139.7G  0 part /home
└─sda2   8:2    0  93.2G  0 part /media/cf/BCKP
sdb      8:16   0 111.8G  0 disk
├─sdb1   8:17   0   3.7G  0 part /boot
├─sdb2   8:18   0  46.6G  0 part /
├─sdb3   8:19   0 476.9M  0 part /boot/efi
└─sdb4   8:20   0   4.7G  0 part [SWAP]
sdc      8:32   0 931.5G  0 disk
├─sdc1   8:33   0 781.3G  0 part /media/cf/IOMEGA
└─sdc2   8:34   0 150.3G  0 part /media/cf/BACKUP
</pre>
<hr>
Note down the block device you need.
E.g. I wanted the /media/BCKP to be automounted so I remembered sda2. Simple right?


##Get the UUID

Next thing to do is to get the UUID (Universally unique identifier) of the partition in your case.

This is done by listing all binary files in the /dev/disk dir:

```
ls -l /dev/disk/by-uuid/
```

You get something like this:
<hr>
<pre>
lrwxrwxrwx 1 root root 10 May  8 17:38 0098f2fe-2eb0-4030-b933-c196e1097fc9 -> ../../sda2
lrwxrwxrwx 1 root root 10 May  8 17:38 3bf7c4e4-72a7-4d9a-b33a-1cd2941fff7f -> ../../sdb4
lrwxrwxrwx 1 root root 10 May  8 17:38 8932949c-6628-45f6-b6d2-9342ec07c7d6 -> ../../sdb2
lrwxrwxrwx 1 root root 10 May  8 17:38 9D59-7184 -> ../../sdb3
lrwxrwxrwx 1 root root 10 May  8 17:38 abde6f6a-df07-4721-96e0-9fab8494531d -> ../../sda1
lrwxrwxrwx 1 root root 10 May  8 17:38 b59d209c-3c19-4e4b-84ff-8eda7480cc89 -> ../../sdb1
lrwxrwxrwx 1 root root 10 May  8 17:38 f6c607e5-bd41-387f-b433-8d89cb7e084f -> ../../sdc2
lrwxrwxrwx 1 root root 10 May  8 17:38 F82C5A272C59E0E4 -> ../../sdc1
</pre>
<hr>
I want to automount the partition sda2 so my UUID I have to remember for the next step is ```0098f2fe-2eb0-4030-b933-c196e1097fc9```


##Editing the fstab

To automount a partition on start up you need to make an entry for that in the fstab file in /etc :

*Open this file with an editor of your choice*

```
gedit /etc/fstab
```

> I recommend to backup your fstab. <br/> If you mess it up I will laugh at you. <br/> &lt;/disclaimer&gt;

The syntax of a fstab entry is:
<hr>
<pre>&lt;file system&gt;   &lt;mount point&gt;   &lt;type&gt;   &lt;options&gt;   &lt;dump&gt;   &lt;pass&gt;</pre>
<hr>

You remember your UUID, right? 'cause now you need it, as well as the mounting point you want the partition to be mounted

Let's say your UUID is ```0098f2fe-2eb0-4030-b933-c196e1097fc9```

so your new entry at the end of the fstab would be :

```
UUID=0098f2fe-2eb0-4030-b933-c196e1097fc9 /media/cf/BCKP ext4 errors=remount-ro 0 2
```

Check [the wikipedia article](http://en.wikipedia.org/wiki/Fstab) for more info about that.

> Remember to append a new line to the end of the fstab!

Super easy automounting of partitions on linux bro!

Please let me know if there are some inconsistencies or errors in the tutorial, but also if you're having trouble with it :)
