Emissary
========

Introduction
-------
Emissary is a CoffeeScript (and subsequently JavaScript) bootstrap project to remove the overhead of starting a new project. This project allows developers to leverage classes to bind common functionality to the DOM.

Features
-------
Segments JavaScript/CoffeeScript code to specific classes, which will only be bound to the DOM on pages in which has the class attributed to the block.

Usage
-------
Emissary is meant to be used as a boilerplate. As such, copying the raw contents of specific filetype you are looking to use ([CoffeeScript](https://github.com/myriadmobile/emissary/blob/master/dist/emissary.coffee) or [JavaScript](https://github.com/myriadmobile/emissary/blob/master/dist/emissary.js)) and adding the source to a file of your choice in your project.

If you would like to keep a record of this as a component, you can add it via Bower.

```
bower install emissary=https://github.com/myriadmobile/emissary#^0.1.0 --save-dev
```

After getting the Bower component installed, you can follow the instructions for the raw contents above.

Documentation
-------
Emissary is body.class based, and as such body.classes will be converted to match Emissary Obj methods.

### body.class namespace
Emissary uses a class namespace (of sorts) to make sure there are no collisions between binding classes and style classes. For binding classes use **em-** as a prefix. This will ensure that the class in question is parsed by Emissary and bound accordingly. 

### body.class parsing
When parsing body classes only classes with the namespace (mentioned above) will be parsed. After parsing and removing the namespace, Emissary will convert all hyphens (-) to underscores (_). That means that a class of "em-about-us" will be parsed into "about_us", this is the string should correspond to a nested object in Emissary. The ```init``` function, by default, will be run. You can use the ```this``` keyword to call other methods in the Emissary nested object.

### body.class limits
There are no limits when it comes to the amount of classes that Emissary will parse off of a body tag.

Dependencies
-------
Emissary has been designed to require jQuery. Removing (or modifying) the jQuery dependency is as easy as changing the global passed into the anonymous function, and updating the default array iteration on line 26 to match either native JS or a different library.

Bugs and Feedback
-------
Have you found a bug? We'd sincerely appreciate an issue opened with as much detail as possible about the problem. Additionally, if you have a rad idea for a feature, tweak, or configurable aspect, create an issue! We'd love to hear from you. Fair warning: we may not agree the feature or tweak is a rad idea and close the issue, in which case you should maintain your own fork with your own changes.

Contributors
-------

Would you like to contribute? Fork us and send a pull request! Be sure to checkout our issues first.


FAQ
-------
> Why Emissary?

Emissary makes it easy to bind custom code blocks to individual body.classes. This helps developers keep code DRY, and allows for very easy additions to available javascript without needing to write extra code bind to bind.

License
--------
The MIT License (MIT)

Copyright (c) 2014 Myriad Mobile, www.myriadmobile.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
