let song;

function setup() {
  //mp3 from this link: https://www.youtube.com/watch?v=B-n1Iytpipw&ab_channel=TaranVanHemert
  song = loadSound('assets/stock_scary_sound.wav.mp3');
  createCanvas(720, 200);
  background(255, 0, 0);
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}
