function preload(){

}

function setup(){
canvas= createCanvas(600,600);
canvas.position(120,400);
video= createCapture(VIDEO);
video.hide();
}

function draw(){
    fill(40,200,200);
    circle(550,550,50);
    fill(40,200,200);
    circle(550,50,50);
    fill(40,200,200);
    circle(50,50,50);
    fill(40,200,200);
    circle(50,550,50);
    fill(250,0,100);
    rect(50,50,500,500);
    image(video,100,100,400,400);
}


function take_snapshot(){
save('picture.png');
}

