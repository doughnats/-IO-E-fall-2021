// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js
=== */

let video;
let poseNet;
let poses = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, {outputStride:8, quantBytes:4}, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function mousePressed(){
  console.log(JSON.stringify(poses))
}

function draw() {
  image(video, 0, 0, width, height);
  strokeWeight(2);

  // For one pose only (use a for loop for multiple poses!)
  if (poses.length > 0) {
    const pose = poses[0].pose;
      console.log(pose);


    //CREATING EYES
    // Changed the colour to white
    //What didn't work: I thought I had to duplicate the code below to get another black ellipse on top for the right eye, but it broke the code
    //How I fixed it: Afterwards I thought maybe I just had to add another ellipse and not have to duplicate the entire section of code and my code started working again
    noStroke();  
    fill(255, 255, 255);
    const rightEye = pose.rightEye;
    ellipse(rightEye.x, rightEye.y, 50, 50);
    fill(0, 0, 0);
    ellipse(rightEye.x-8, rightEye.y+10, 25, 25);


    //for the left eye
    fill(255, 255, 255);
    const leftEye = pose.leftEye;
    ellipse(leftEye.x, leftEye.y, 50, 50);
    fill(0, 0, 0);
    ellipse(leftEye.x-8, leftEye.y+10, 25, 25);
      
    // fill(0,255,0);
    //   const rightShoulder = pose.rightShoulder;
    // ellipse(rightShoulder.x, rightShoulder.y, 20, 20 );  
  }
}