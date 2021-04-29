var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var sofia = createSprite(20, 25, 18, 18);
sofia.shapeColor = "orange";
var cardBoard1 = createSprite(10, 70, 100, 20);
cardBoard1.shapeColor = "brown";
var cardBoard2 = createSprite(100, 50, 20, 100);
cardBoard2.shapeColor = "brown";
var cardboard3 = createSprite(80, 130, 100, 20);
cardboard3.shapeColor = "brown";
var cardboard4 = createSprite(50, 250, 20, 100);
cardboard4.shapeColor = "brown";
var cardboard5 = createSprite(130, 210, 100, 20);
cardboard5.shapeColor = "brown";
var cardboard6 = createSprite(10, 250, 100, 20);
cardboard6.shapeColor = "brown";
var cardboard7 = createSprite(160, 120, 20, 100);
cardboard7.shapeColor = "brown";
var cardboard8 = createSprite(150, 20, 100, 20);
cardboard8.shapeColor = "brown";
var cardboard9 = createSprite(250, 70, 20, 100);
cardboard9.shapeColor = "brown";
var cardboard10 = createSprite(270, 150, 100, 20);
cardboard10.shapeColor = "brown";
var cardboard11 = createSprite(330, 50, 100, 20);
cardboard11.shapeColor = "brown";
var cardboard12 = createSprite(340, 125, 20, 100);
cardboard12.shapeColor = "brown";
var cardboard13 = createSprite(220, 250, 20, 100);
cardboard13.shapeColor = "brown";
var cardboard14 = createSprite(330, 210, 150, 20);
cardboard14.shapeColor = "brown";
var cardboard15 = createSprite(100, 300, 20, 100);
cardboard15.shapeColor = "brown";
var cardboard16 = createSprite(180, 310, 100, 20);
cardboard16.shapeColor = "brown";
var cardboard17 = createSprite(30, 352, 20, 100);
cardboard17.shapeColor = "brown";
var cardboard18 = createSprite(175, 352, 20, 100);
cardboard18.shapeColor = "brown";
var cardboard19 = createSprite(280, 290, 20, 100);
cardboard19.shapeColor = "brown";
var cardboard20 = createSprite(350, 270, 120, 20);
cardboard20.shapeColor = "brown";
var cardboard21 = createSprite(250, 390, 100, 20);
cardboard21.shapeColor = "brown";
var cardboard22 = createSprite(330, 370, 20, 100);
cardboard22.shapeColor = "brown";
var cup = createSprite(395, 375, 10, 50);
cup.shapeColor = "yellow";
function draw() {
  background("blue");
  sofia.velocityX = 0;
  sofia.velocityY = 0;
  if (sofia.collide(cup)) {
    textSize(40);
    stroke("red");
    text("You Win", 120, 200);
    stroke(rgb(128, 128, 128));
  }
  if (keyDown("UP_ARROW")) {
    sofia.velocityX = 0;
    sofia.velocityY = -4;
  }
  if (keyDown("DOWN_ARROW")) {
    sofia.velocityX = 0;
    sofia.velocityY = 4;
  }
  if (keyDown("LEFT_ARROW")) {
    sofia.velocityX = -4;
    sofia.velocityY = 0;
  }
  if (keyDown("RIGHT_ARROW")) {
    sofia.velocityX = 4;
    sofia.velocityY = 0;
  }
  sofia.bounceOff(cardBoard1);
  sofia.bounceOff(cardBoard2);
  sofia.bounceOff(cardboard3);
  sofia.bounceOff(cardboard4);
  sofia.bounceOff(cardboard5);
  sofia.bounceOff(cardboard6);
  sofia.bounceOff(cardboard7);
  sofia.bounceOff(cardboard8);
  sofia.bounceOff(cardboard9);
  sofia.bounceOff(cardboard10);
  sofia.bounceOff(cardboard11);
  sofia.bounceOff(cardboard12);
  sofia.bounceOff(cardboard13);
  sofia.bounceOff(cardboard14);
  sofia.bounceOff(cardboard15);
  sofia.bounceOff(cardboard16);
  sofia.bounceOff(cardboard17);
  sofia.bounceOff(cardboard18);
  sofia.bounceOff(cardboard19);
  sofia.bounceOff(cardboard20);
  sofia.bounceOff(cardboard21);
  sofia.bounceOff(cardboard22);
  sofia.collide(cup);
  
  
  createEdgeSprites();
  sofia.bounceOff(edges);
  
  
  textSize(19);
  textFont("Arial");
  text("Cup", 360, 340);
  textSize(19);
 text("sofia", 30, 43);
     
 drawSprites();
       
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
