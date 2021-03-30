// Replicating Bootstrap's box shadow, rotated to match the angle of rotated elements
// @link https://jsfiddle.net/dg78usmt/102/

function angledShadow(element) {
  var thisClassName = element.className;

// get angle from CSS
  var angle = 0
  if (thisClassName == "sticky sticky-a") {
    var angle = -4;
  } else if (thisClassName == "sticky sticky-b") {
    var angle = 2;
  }

  // can't dynamically get angle because they are hidden by default
  //let style = window.getComputedStyle(element); console.log(style);
  //let transformed = style.getPropertyValue("transform"); console.log(transformed);
  //let angle = convertToAngle(transformed);

  // compute offset of shadow
  var shadowOffset = 0.5;
  var shadowX = Math.sin(angle * (Math.PI / 180) * shadowOffset);
  var shadowY = Math.cos(angle * (Math.PI / 180) * shadowOffset);

  var shadowX2 = Number.parseFloat(shadowX).toFixed(3);
  var shadowY2 = Number.parseFloat(shadowY).toFixed(3);

  // enable shadow
  var boxShadowMessage = shadowX2 + "rem " + shadowY2 + "rem 1rem rgba(0,0,0,0.15)";

  element.style.boxShadow = boxShadowMessage;
  console.log(angle + " " + boxShadowMessage);

  function convertToAngle(matrix) {
    var values = matrix.split('(')[1],
       values = values.split(')')[0],
       values = values.split(',');
  
   var sin = values[1]; // 0.5
  
   return Math.round(Math.asin(sin) * (180/Math.PI));
  }
}

function enableShadows() {
  // get elements to give shadow
  var rotatedElements = $(".sticky");

  console.log(rotatedElements);

  // loop through elements
  for (const element of rotatedElements) {
    console.log(element.parentNode.parentNode.parentNode.id);
    angledShadow(element);
  }
}

window.onload = enableShadows();