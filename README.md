# ng frmwrk [![Build Status](https://travis-ci.org/danielditgens/ng-frmwrk.png)](https://travis-ci.org/danielditgens/ng-frmwrk) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

This will be a framework for angular apps. Efficient and fast development environment with a clean structure and optimized workflows.

Init: ```npm i```

Watch: ```grunt```

Build: ```grunt build```


###Generator

An convenient way to create common directives and factories. 

**Elements**
are reuseable tags withing the app stored in `src/common/elements` consisting of an AngularJS Directive, an less file and a html template in a folder. Create new elements with the commend:

	node new element navItem

This will result in a new folder and three files being generated:

	src/
		common/
			elements/
				navItem/
					navItem.js
					navItem.tpl.html
					navItem.less


**Modules**
are reuseable tags included other modules or elements. This is accomplished using the AngularJS transclude directive.

	node new module foldingPanel

**libs**
are general AngularJS Factories by default.

	node new lib userProfile

---

This is still under development!

Feel free to join our team! We are nice people.
