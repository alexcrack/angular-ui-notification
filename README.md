angular-ui-notification
=======================

[![Dependency Status](https://david-dm.org/alexcrack/angular-ui-notification.png)](https://david-dm.org/alexcrack/angular-ui-notification)
[![devDependency Status](https://david-dm.org/alexcrack/angular-ui-notification/dev-status.png)](https://david-dm.org/alexcrack/angular-ui-notification#info=devDependencies)
[![Build Status](https://travis-ci.org/alexcrack/angular-ui-notification.svg?branch=master)](https://travis-ci.org/alexcrack/angular-ui-notification)

Angular.js service providing simple notifications using Bootstrap 3 styles with css transitions for animations

## Features
* No dependencies except of angular.js.
* CSS3 Animations.
* Small size.
* 5 message types.
* Use HTML in your messages.

## Usage
 [Heres a plunker demo](http://plnkr.co/edit/5Gk8UVvzUsjyof7Gxsua?p=preview)

#### Install

To install the package using bower and save as a dependency use...
```bash
bower install angular-ui-notification --save
```  
  
In your html/template add 
```html
...
  <link rel="stylesheet" href="angular-ui-notification.min.css">
...
  <script src="angular-ui-notification.min.js"></script>
...

```

In your application, declare dependency injection like so..

```javascript
  angular.module('notificationTest', ['ui-notification']);
...
```

And when you need to show notifications, inject service and call it!

```javascript
angular.module('notificationTest').controller('notificationController', function($scope, Notification) {
 
  Notification.primary('Primary notification');
  // or simply..
  Notification('Primary notification');
  
  // Other Options
  // Success
  Notification.success('Success notification');
  
  // With Title
  Notification({message: 'Primary notification', title: 'Primary notification'});
  
  // Message with custom delay
  Notification.error({message: 'Error notification 1s', delay: 1000});
  
  // Embed HTML within your message.....
  Notification.success({message: 'Success notification<br>Some other <b>content</b><br><a href="https://github.com/alexcrack/angular-ui-notification">This is a link</a><br><img src="https://angularjs.org/img/AngularJS-small.png">', title: 'Html content'});

}
```
