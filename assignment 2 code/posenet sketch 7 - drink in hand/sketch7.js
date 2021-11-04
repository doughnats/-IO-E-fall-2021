let video;
let pose;
let img2;
let skeleton;

function setup(){
createCanvas(640, 480);
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses) 
//I tried loading the face image and it works, but in the original code when I had the hand image it didn't appear for some reason
// img2 = loadImage('images/face.svg');   

//The drink drawing was drawn by me
img2 = loadImage('images/nats_art.png');    
}

function modelLoaded(){
    console.log("modelLoaded function has been called so this work!!!!");
};



function gotPoses(poses){
    //console.log(poses);
    if( poses.length >0 ){
        pose = poses[0].pose;
        skeleton = poses[0].skeleton; 
    } 
    
} 


function draw(){
image(video, 0, 0);
   
if(pose){
    fill(255,0,0);
    ellipse(pose.nose.x, pose.nose.y, 10);
    image(img2, pose.leftWrist.x-85,pose.leftWrist.y-150 , 150, 150);
    
    for(let i=0; i < pose.keypoints.length; i++){
    let x = pose.keypoints[i].position.x;
    let y = pose.keypoints[i].position.y;
    
    
    console.log("keypoints");
    fill(0,255,0);    
    ellipse(x,y,20,20); 
        
    for(let i = 0; i < skeleton.length; i++){
        let a = skeleton[i][0];
        let b = skeleton[i][1];
        strokeWeight(2);
        stroke(255);
        line(a.position.x, a.position.y,b.position.x, b.position.y );
        }    
    }
}  
    
    
}