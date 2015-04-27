---
title: "About business value and confidence in legacy projects"
date: 2015-04-27
layout: post
---

Recently I got the *opportunity* to work in a legacy, and wanted to share what I learned about gaining confidence and still deliver business value.

---

I found myself struggling in a legacy project with this question:

> When do you know you found the right tradeoff between delivering value to the customer and sanitizing the codebase?

From my point of view, as soon as you are not confident anymore on the things you could've broken with a small change, that's the moment when you have to invest time in covering the desired part in tests and start refactoring.

Once you, as a developer, have reached that point in the project, you need to make a great tradeoff between trying to get confidence about the part of the codebase you're going to touch and still deliver business value.

This can be very tedious and steal some valuable time to the business.

Naturally, you have to do the least amount of work needed to make you confident and don't waste time to polish other parts of the system.

---

One of the most stressful/challenging moments in this project was the communication to the business.

This was due to the fact that the application was working very well, seen from "outside";
in other words the external quality was quite satisfactory.

From the developer perspective it was a nightmare to work with it sometimes,
mostly because of its fragility and high entanglement of components in the application.

But that's no excuse to still *try* to do a good job..

### Lessons learned

To gain confidence in the monstrous codebase we found the following points useful, if not *essential*:

-fd
