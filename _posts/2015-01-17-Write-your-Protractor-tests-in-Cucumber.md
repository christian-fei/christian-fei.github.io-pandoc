---
title: "Write your Protractor tests in Cucumber"
date: 2015-01-17
layout: post
---

[tldr;](#tldr)

First of all I would like to explain *why*:

In my opinion sometimes you can write *some* of your E2E tests and your User-acceptance tests in one go, together.
I'm not saying all of them, some E2E tests can cover exceptional cases and often are on the sad path in terms of UAT.

Both of them are rather flaky in terms of feedback and can't give any detailed hint where the test failed, except the approximate region of your application.

Both hit the application in the running state, so why not write *some* of them in the language of the business while testing technical aspects hidden behind?

It's just a thought, probably I'm totally wrong and should read more about both aspects :)

Anyways:



<h2 id="tldr">tldr;</h1>

In your default `protractor-conf.js` file, add this line to let protractor know that you're writing your tests in Cucumber:

```
  ...
  framework: 'cucumber',
  cucumberOpts: {
    // define your step definitions in this file
    require: 'features/steps.js',
    format: 'progress'
  },
  ...
```

Now write your step definitions following this pattern in your `steps.js` :

```
var chai = require('chai');
// var chaiAsPromised = require('chai-as-promised');
// chai.use(chaiAsPromised);

var expect = chai.expect;


module.exports = function() {
  this.Given(/^I go to "([^"]*)"$/, function(url, next) {
    browser.get('http://localhost:9000' + url);
    next();
  });

  this.Then( /^I click on "([^"]*)"$/, clickOnHandler);

  this.Then(/^I should see "([^"]*)"$/, function (content, next) {
    assertPageContains(content,next);
  });

  function assertPageContains(content,next){
    browser.getPageSource().then(function(source){
      expect(source).to.contain(content);
      next();
    });
  }

  function clickOn(selector) {
    element(by.css(selector)).click();
  }

};
```



An example of an acceptance test could be (taken from [pomodoro.cc](https://pomodoro.cc)):

```
Feature: Loading the dashboard page
  As a user of Pomodoro.cc
  I should be able to see the dashboard
  So that I can track time

  Scenario: Visiting /
    Given I go to "/"
    Then I should see "Start Timer"
    Then I should see "00:00"
```
