---
title: "What Elixir and Angular have in common"
date: 2015-10-19
layout: post
---

**Warning: sarcasm ahead**

I found that during tests or in the console, Angular and Elixir share some common behaviour: the need to flush the mailbox or run the digest loop.

If you think about it, in both cases you have a flush method:

```
# Elixir
iex(8)> send pid, {:ping_count, self}
iex(9)> flush
{:ping_count, 2}


// Angular
$httpBackend.flush()
```

I find the similarities of the languages and the VM quite significant, and they are both a great way to learn distributed and concurrent systems.
