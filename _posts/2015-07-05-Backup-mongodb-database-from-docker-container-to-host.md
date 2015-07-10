---
title: "How to backup a mongodb database from a docker container to host"
date: 2015-07-05
layout: post
---

One of the [recommended backup strategies](http://docs.mongodb.org/manual/tutorial/backup-and-restore-tools/) of a mongodb database is through its tool called `mongodump`.

We will use it to dump the current consistent state of the database with all its collections and move it to the host machine for persistence.

Let's say you have a docker container running a mongodb database with a volume on the host.

You can create a dump of the current state of the database with `mongodump`.

*Update*: as suggested by sokrat in the comments, you can run this command to backup your mongo database to host on `/backup`:

```
docker run --rm -it --link pomodoro-api-db:mongo_alias -v /backup:/backup mongo mongodump --host mongo_alias --out /backup/
```
