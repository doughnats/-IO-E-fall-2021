var canvas;
var click1;
var click2;
var click3;
var clickImg;

function preload(){

//Code reference: https://github.com/Lartu/p5.clickable

  //------- images are drawings I drew
  //------- changed the image
  clickImg = loadImage('./cat.png');
  clickImg2 = loadImage('./duck.png');
  clickImg3 = loadImage('./rat.png');
}
function setup() { 
  //------- changed canvas size
  createCanvas(windowWidth, windowHeight);

  //Create, style and resize clickables.
  click1 = new Clickable();
  click1.locate(200, 100);
  //----- added a resize
  click1.resize(300, 100);
  //This function is ran when the clickable is hovered but not pressed.
  click1.onHover = function () {
    this.color = "#AAAAFF";
    this.textColor = "#FFFFFF";
    this.text = "Hehe!";
  }
  //This function is ran when the clickable is NOT hovered.
  click1.onOutside = function () {
    this.color = "#EEEEEE";
    this.text = "We're a bunch of pets that would like some attention!";
    this.textColor = "#000000";
  }
  //This function is ran when the clickable is pressed.
  click1.onPress = function () {
    this.stroke = "#FF0000";
  }
  //This funcion is ran when the cursor was pressed and then
  //rleased inside the clickable. If it was pressed inside and
  //then released outside this won't work.
  click1.onRelease = function () {
    this.x += 50;
  }

  click2 = new Clickable();
  click2.cornerRadius = 0;
  click2.textScaled = true;
   //------- changed text
  click2.text = "Click here to pet me please ❤️";
  click2.locate(700, 60);
     //------- changed size, location and colours
  click2.resize(250, 200);
  click2.onOutside = function () {
    this.color = "#ffdead";
  }
  click2.onHover = function () {
    this.color = "#ffbf70";
  }
  click2.onPress = function () {
    alert("Thank you for petting me!");
  }


    click3 = new Clickable();
  click3.image = clickImg;
  click3.locate(620,400);
  click3.resize(350,300);
  click3.text = "";
  click3.onHover = function () {
    this.color = "#ffccdd";
    this.noTint = false;
    this.tint = "#FF0000";
  }
  click3.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  }

  // image will stretch to fill button by default
  click4 = new Clickable();
  //----- for the duck
  click4.image = clickImg2;
  click4.imageScale = 1;
  click4.text = "";
  click4.locate(330, 400);
  click4.resize(260, 300);
  click4.onHover = function () {
    click4.imageScale = 1.1;
  }
  click4.onOutside = function () {
    click4.imageScale = 1;
  }

  // centered and fitted
  click5 = new Clickable();
  //------ for the rat
  click5.image = clickImg3;
  click5.fitImage = true; // no stretching!
  click5.imageScale = 1;
  click5.text = "";
  click5.locate(1000, 400);
  click5.resize(260, 300);
  click5.onHover = function () {
    click5.imageScale = 1.1;
  }
  click5.onOutside = function () {
    click5.imageScale = 1;
  }
}

function draw() {
  background(255);
  click1.draw();
  click2.draw();
  click3.draw();
  click4.draw();
  click5.draw();
}
