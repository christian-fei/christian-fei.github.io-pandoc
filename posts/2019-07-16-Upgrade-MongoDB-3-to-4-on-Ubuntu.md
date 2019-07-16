---
title: Upgrade MongoDB 3 to 4 on Ubuntu
date: 2019-07-16
---

Do you need to upgrade from MongoDB version 3.4 / 3.6 to version 4.0 ?

## Starting from 3.4

If you are upgrading from version 3.4, you'll need to upgrade first to 3.6 and then to 4.0.

[Read here for more info](https://docs.mongodb.com/manual/release-notes/3.6-upgrade-standalone/#upgrade-version-path).

To do so, enter the mongo shell and verify the current compatibility setting:

```
db.adminCommand( { getParameter: 1, featureCompatibilityVersion: 1 } )
```

Afterwards, set the feature compatibility version to 3.4 like so:

```
db.adminCommand( { setFeatureCompatibilityVersion: "3.4" } )
```

### Upgrading to 3.6

First, remove any source file related to 3.4 (the file should be `mongodb-org-3.4.list`):

```
ls -lha /etc/apt/sources.list.d/
# you should see mongodb-org-3.4.list, remove it
```

Get the latest keys and update the repository:

```
sudo apt-key adv –keyserver hkp://keyserver.ubuntu.com:80 –recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list

apt-get update
apt-get remove mongodb-org
apt-get install -y mongodb-org
```


## Starting from 3.6

Once you're on 3.6, you can safely upgrade to 4.0, by setting the feature compatibility version first.

Enter the mongo shell and execute:

```
db.adminCommand( { setFeatureCompatibilityVersion: "3.6" } )
```

### Upgrading to 4.0

First, remove any source file related to 3.6 (the file should be `mongodb-org-3.6.list`):

```
ls -lha /etc/apt/sources.list.d/
# you should see mongodb-org-3.6.list, remove it
```

Get the latest keys and update the repository:

```
sudo apt-key adv -keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list

apt-get update
apt-get remove mongodb-org
apt-get install -y mongodb-org
```

## Next steps

Check the logs to verify everything is ok: `/var/log/mongodb/mongodb.log`