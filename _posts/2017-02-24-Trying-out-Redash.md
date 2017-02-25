---
title: 'Trying out Redash'
date: 2017-02-24
layout: post
category: posts
---

Today I installed [redash](https://redash.io/) with AWS EC2 and AWS SES, with the help of [the official guide](https://redash.io/help-onpremise/setup/setting-up-redash-instance.html#setup-redash-instance-setup).

Take a look at [the public dashboard](http://ec2-35-157-99-204.eu-central-1.compute.amazonaws.com/public/dashboards/9vt14NRnDAxp6IujiYiJ1u4nsGbiAWJ1F59LJEGt?org_slug=default) that visualizes the current user count on my Redash instance!

<img src="/assets/images/posts/redash.users.count.png" alt="redash.users.count.png" class="fancy"/>

The server runs on a t2.micro instance, backed by the Redash Ubuntu AMI.

I am using Amazon SES as the mail service.

# Redash

## Visualize Queries

To visualize something in Redash, you need a query.

And you execute a query on some data.

Fortunately, Redash has a default dataset (itself!) to play with, instead of hooking up an external data source.

## Visualize Events

Create a new Query (*/queries/new*):

<img src="/assets/images/posts/redash.create.new.query.png" alt="redash.create.new.query.png" class="fancy medium"/>

Let's aggregate events by action and type of a Redash instance:

```
SELECT count(*) as times
    , action
    , object_type
FROM events
group by action, object_type
order by times desc
```

<img src="/assets/images/posts/redash.query.new.png" alt="redash.query.new.png" class="fancy"/>

Use the following configuration to create a visualization:

<img src="/assets/images/posts/redash.visualization.new.png" alt="redash.visualization.new.png" class="fancy"/>

## Final result

You should end up with something like this:

<img src="/assets/images/posts/redash.visualization.events.png" alt="redash.visualization.events.png" class="fancy"/>

---

# Conclusion

It seems like a nice piece of software, my idea is to integrate Redash with [mnesia](https://github.com/christian-fei/mnesia) to visualize things you saved in mnesia!
