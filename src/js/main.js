window.onload = function() {

  var sheet = (function() {
    var style = document.createElement("style");
    style.appendChild(document.createTextNode(""));
    document.head.appendChild(style);
    return style.sheet;
  })();

  // Add a new rule
  sheet.addRule('.header:before', 'background-color:none');

  var headerBackgroundNode = document.querySelector('.header__background'),
      headerTintRule       = sheet.cssRules[0];


  var updateHeaderTintColor = function(color){
    color = 'rgba('+color.map(function(i, dex){return (dex !== 3) ? Math.round(i) : i;}).join(',')+')';
    headerTintRule.style.backgroundColor = color;
  };

  var updateHeaderBlur = function(blur){
    headerBackgroundNode.style.webkitFilter = 'blur('+blur+'px)';
  };

  var updateHeaderOpacity = function(opacity){
    headerBackgroundNode.style.opacity = opacity;
  };

  var options = {
    headerTint : {
      color   : [ 255, 255, 255, 0.1 ], // Shared with SCSS! Keep in mind
      opacity : 0.1
    },
    headerBlur : {
      blur    : 0,
      opacity : 0.1
    }
  };

  var gui = new dat.GUI();

  var headerTint = gui.addFolder('Header tint');

      headerTint.addColor(options.headerTint, 'color').onChange(updateHeaderTintColor).listen();

      headerTint.add(options.headerTint, 'opacity', 0, 1).step(0.1).onChange(function(opacity){
        options.headerTint.color[3] = Math.round(opacity*10)/10;
        updateHeaderTintColor(options.headerTint.color);
      });

      headerTint.open();

  var headerBlur = gui.addFolder('Header blur');

      headerBlur.add(options.headerBlur, 'blur',0, 20).onChange(updateHeaderBlur);

      headerBlur.add(options.headerBlur, 'opacity', 0, 1).step(0.1).onChange(updateHeaderOpacity);


      headerBlur.open();

  // Fix dat.gui bug https://code.google.com/p/dat-gui/issues/detail?id=11
  var cInput = document.querySelector('.c input');
      cInput.disabled = true;




};