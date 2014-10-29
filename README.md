# mercury-example

A simple example of a mercury project

## Setup

```
npm install
npm install browserify -g
npm install http-server -g
```

## Run Demo

```
browserify app/index.js -o bundle.js
http-server
```

## About

This is a very simple example project of the mercury framework, a framework that is made out of tiny modules.  The concept of a mercury app is that it needs four sections to build an app.

* Input - this module captures all of the events from the presentation layer
* State - this module/object contains all of the data for the app
* Render - this module is responsible for rendering the presentation layer
* Update - this module updates the state when a event is triggered



