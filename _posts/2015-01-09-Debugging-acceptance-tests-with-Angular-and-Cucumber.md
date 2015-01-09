---
title: "Debugging acceptance tests with Angular and  Cucumber"
date: 2015-01-09
layout: post
---

I found myself quite helpless when debugging acceptance tests of any kind. One trick I found useful if you can't understand where the problem could be and want to 'see' what the web driver is seeing, is to add the following step definition to your web driver configuration:

```
Then /^show me the page/ do
  print page.html
end
```

and use it like this to at least have a small clue what's going on:

```
@javascript
Scenario: controlling order
  Given there are 12 cucumbers
  Then show me the page
  When I eat 5 cucumbers
  Then I should have 7 cucumbers
```
