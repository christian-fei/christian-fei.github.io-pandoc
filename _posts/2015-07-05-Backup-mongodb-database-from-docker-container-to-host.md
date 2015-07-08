---
title: "How to backup a mongodb database from a docker container to host"
date: 2015-07-05
layout: post
---

One of the [recommended backup strategies](http://docs.mongodb.org/manual/tutorial/backup-and-restore-tools/) of a mongodb database is through its tool called `mongodump`.

We will use it to dump the current consistent state of the database with all its collections and move it to the host machine for persistence.

Let's say you have a docker container running a mongodb database with a volume on the host.

You can create a dump of the current state of the database with `mongodump`.

You need to enter the running mongodb container, to do that you need to execute the following:

```
docker exec -it RUNNING_MONGODB_CONTAINER_ID_OR_NAME mongodump --out /backup
```

Once this process is finished, you can grab the dumped that and copy it to the host with

```
docker cp RUNNING_MONGODB_CONTAINER_ID_OR_NAME:/backup /backup
```

where the last parameter `/backup` is the folder on the host machine.


Now you can savely delete the temporary dump on the docker container with 

```
docker exec -it RUNNING_MONGODB_CONTAINER_ID_OR_NAME rm -rf /backup
```