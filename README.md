Chrome Extension CSS Example
============================

An example of a Chrome extension that injects a stylesheet set by the user.

### Installation

* Clone this repo
* Run `npm install && bower install`
* Go to <a href="chrome://extensions">chrome://extensions</a> and click `Load Unpacked Extension` and browse to the `app` folder in this project
* Open the extension *Options*
* Put a URL for a stylesheet you would like to inject
* Go to [http://vancouver.craigslist.ca/](http://vancouver.craigslist.ca/)

### ToDo

* Add option for keeping default stylesheets

##### Adding option for toggling stylesheet removal

* Add new checkbox in options for removing stylesheets
* Add conditional in contentscripts for checking option