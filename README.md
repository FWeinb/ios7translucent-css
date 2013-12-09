iOS7 Translucent
-------

Implementation of the iOS7 translucent topbar using CSS Regions

Live Demo on [Codepen](http://codepen.io/FWeinb/full/0beac813cb418cb725a0f4173d85bd51)


## How to help?

You need to have nodejs and ruby for compass/sass

  1. Fork this Repo
  2. `npm install`
  3. `grunt dev` will open the `src/index.html` in your default browser

### Mobile

  1. Open http://localhost:9000/mobile.html on your iPhone.
  2. Get **inertial scrolling** to work


Just for you to see how close it is a GIF:
![iOS7 Wrapper on iPhone 5S](https://dl.dropboxusercontent.com/u/5319/github/ios7translucent/iOS7-WebApp.gif)


## Where is it working?

This is currently working in
  * Chrome 29+ (enable  'experimental-webkit-features'/'enable-experimental-web-platform-features')
  * Safari 6.1 beta
  * Mobile Safari on iOS7, scrolling is working. But **no inertial scrolling**