---
title: "Start your coding kata the right way"
date: 2015-02-21
layout: post
---

If you're trying to finish a coding kata in a [pomodoro](https://pomodoro.cc/), you'll most likely have a hard time.

I was sick of almost never finishing a kata, but then this idea hit me:

It would be awesome if you could start a kata from a fresh, already set up workspace, with preconfigured test framework and boilerplate classes.

I found two options suitable to support this workflow.

# git checkout --orphan

Git checkout supports this flag with the following options:

```
git checkout [-q] [-f] [-m] [[-b|-B|--orphan] <new_branch>] [<start_point>]
```

This will checkout a new orphan branch from the given start point, and will have an empty history disconnected from the other branches.
The starting point of this branch though will be the snapshot of the commit given as `start_point`.


Useful if you already commited your first version of the kata on master and want to start the next kata from a specific starting point.

### An example

Let's say you have the following history for the master branch of your kata:

```
re7rew yadda
432423 yadda
jgf92e yadda
4jkj4d yadda
n4b3b3 yadda
g3kdfd first failing applicative test
ngb3hf first failing test to make sure everything is 42
j4gv8x added test framework dep
n2b9d3 init project
fn3bdd init with readme
```


It would be awesome if you could start your next kata session from commit `ngb3hf first failing test to make sure everything is 42` so you're ready to go, and will most likely finish the kata!

So I would do the following to bring me in that position:

```
git checkout --orphan 2nd_attempt ngb3hf
```

and I'm good to go!




# git checkout -b from master as starting point

If you're starting a new repo for a kata you'll most likely opt for this solution.

Simply treat master as your starting point for future katas, and just checkout a new branch with `-b`.
