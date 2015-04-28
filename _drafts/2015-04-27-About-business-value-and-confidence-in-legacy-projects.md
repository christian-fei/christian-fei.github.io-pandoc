---
title: "About business value and confidence in legacy projects"
date: 2015-04-27
layout: post
---

Recently I got the *opportunity* to work in a legacy, and wanted to share what I learned about gaining confidence and still deliver business value.

### About first aid and giving birth to new features

I found myself struggling in a legacy project with this question:

> When do you know you found the right tradeoff between delivering value to the customer and sanitizing the codebase?

From my point of view, as soon as you are not confident anymore on the things you could've broken with a small change, that's the moment when you have to invest time in covering the desired part in tests and start refactoring.

Once you, as a developer, have reached that point in the project, you need to make a great tradeoff between trying to get confidence about the part of the codebase you're going to touch and still deliver business value.

This can be very tedious and steal some valuable time to the business.

Naturally, you have to do the least amount of work needed to make you confident and don't waste time to polish other parts of the system.


### About internal and external quality

One of the most stressful/challenging moments in this project was the communication to the business.

This was due to the fact that the application was working very well, seen from "outside";
in other words the external quality was quite satisfactory.

From the developer perspective it was a nightmare to work with it sometimes,
mostly because of its fragility and high entanglement of components in the application.

I still didn't find a solution to this situation.
But I came to the conclusion that as long as the external quality is acceptable and solves the business problem,
the code underneath doesn't matter *that much*. You can (try to) ignore it *for now*.

*(sorry if I offended you with this strong statement)*



### Lessons learned

To gain confidence in the monstrous codebase we found the following points useful, if not *essential*:

- **stop complaining** about how completely shit the code is and how uncomfortable you are making changes, it **doesn't solve the problem at all**

- you don't have to convince no one how shit the codebase is, business doesn't care.
Just try to **bring in some test coverages and refactorings** into your "estimates"
(3 weeks right?)

- be a **good boyscout**: small improvements do make the difference,
but beware of the kind of changes you make since there are no tests (right?)

- don't let **your decisions as a developer** be taken by the business people,
like *"I HAVE to do some test coverage here to refactor and add the new feature"*,
but you **promptly** get the response *"we HAVE to be online next week"*.
Just try to do your best to ship the new feature with some degree of confidence.

- a legacy project can be *kind of* frustrating, don't let yourself down;
and see it as a great **opportunity** to get better and improve your coding skills,
since you can do it better

---

This is all I have.

I would love to hear your point of view and your experiences.
