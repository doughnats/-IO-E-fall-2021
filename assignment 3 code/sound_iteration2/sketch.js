
//Code reference: https://p5js.org/examples/sound-playback-rate.html
 // A sound file object
let song;

function preload() {
  // Load a sound file

  //------- At first I couldn't get the code to work, but I realized I accidentally pasted some code that wasn't supposed to be in here which was causing the beeping noise
    
//song from: https://www.youtube.com/watch?v=BnaudvmKtiI&ab_channel=MOONJITV%EB%AC%B8%EC%A7%80
  song = loadSound('assets/twinkle.mp3');

//These images are drawings I drew of desserts 
  img = loadImage('assets/donut.png');
  img2 = loadImage('assets/macaron.png');
}

function setup() {
  // createCanvas(710, 400);

  //
  createCanvas(windowWidth, windowHeight);

  // Loop the sound forever
  // (well, at least until stop() is called)
  song.loop();
}

function draw() {
  background(255,192,203);

  // Set the volume to a range between 0 and 1.0
  let volume = map(mouseX, 0, width, 0, 1);
  volume = constrain(volume, 0, 1);
  song.amp(volume);

  // Set the rate to a range between 0.1 and 4
  // Changing the rate alters the pitch

    //------- Changed the constrain speed to be able to manipulate the sound to go at a faster rate
  let speed = map(mouseY, 0.5, height, 0, 2);

  //------- Changed the constrain speed to be able to manipulate the sound to go at a faster rate
  speed = constrain(speed, 0.05, 4);
  song.rate(speed);

  // Draw some circles to show what is going on
  // stroke(0);
  // fill(51, 100);
  // ellipse(mouseX, 100, 48, 48);
  // stroke(0);
  // fill(51, 100);
  // ellipse(100, mouseY, 48, 48);

  //------- Added images instead of using ellipses
  image(img, mouseX, 100, 160, 128.75);
  image(img2, 100, mouseY, 149.25, 131.25);
}
