# npm-owned-modules [![Build Status](https://travis-ci.org/tobiaslabs/npm-owned-modules.svg?branch=master)](https://travis-ci.org/sdmp/npm-owned-modules)

[![Greenkeeper badge](https://badges.greenkeeper.io/saibotsivad/npm-owned-modules.svg)](https://greenkeeper.io/)

Get the list of npm modules owned by a user.

## about it

Since npm doesn't publish any docs for interacting with their API, the
best you can do is read through their [website repo](https://github.com/npm/newww)
and try to reverse engineer it.

What I found was that it's just a simple HTTP call which returns a JSON
array of modules.

So keep using this module if you want, or just hit up this URL:

	https://registry.npmjs.org/-/user/USERNAME/package

Where `USERNAME` is obviously the users name, like `saibotsivad`.

Additional `GET` query params are possible:

* `per_page`: Number of results to include on paginated query.
* `page`: Zero-indexed page for paginated results.
* `format`: Changes the amount of data returned. As best as I can
	tell the only options are not using it or the string `mini`.

For example, to get `5` modules from the user `saibotsivad` go here
(even in your browser):

[https://registry.npmjs.org/-/user/saibotsivad/package?per_page=5&page=0](https://registry.npmjs.org/-/user/saibotsivad/package?per_page=5&page=0)

That's it.

# using this module

Install it the normal way:

	npm install npm-owned-modules

You just call it with a string that's the user name:

```js
var ownedModules = require('npm-owned-modules')
ownedModules('saibotsivad', function(err, modules) {
	// modules array
})
```

The modules list is just a simple array of module name strings, e.g.:

```js
var modules = [
	'npm-owned-modules',
	'ftp-core'
	// etc.
]
```

# license

[VOL](http://veryopenlicense.com)
