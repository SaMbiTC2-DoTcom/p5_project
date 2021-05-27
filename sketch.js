let droplets=[];
// let droplets1=[];
let grav= 0.1;
//let a;
function setup(){
    createCanvas(windowWidth,windowHeight*2);
    for(let i=0;i<20;i++){
        droplets[i]=new drops();
        droplets[i].x=80*i+40;
        droplets[i].elasticity= 1-(droplets[i].radius/75);
    }
    //a = random(windowHeight/0.8,windowHeight);
    // for(let i=0;i<20;i++){
    //     droplets1[i]=new drops();
    //     droplets1[i].y=30;
    //     droplets1[i].x=20*i+10;
    //     droplets1[i].elasticity= 0.05*random(0,16);
    // }
}

function draw(){
    background(220);
    fillBack();
    for(let i=0;i<round(windowWidth/80);i++){
        fill(0);
        //stroke(0);
        //strokeWidth(2);
        circle(droplets[i].x,droplets[i].y,droplets[i].radius);
        //circle(droplets1[i].x,droplets1[i].y,droplets1[i].radius);
        droplets[i].update();
        //droplets1[i].update();
    }
}
function fillBack(){
    fill(255,0,0,80);
    noStroke();
    circle(0,windowHeight,2000);
    fill(0,255,0,80);
    circle(windowWidth,windowHeight,900);
    fill(0,0,255,80);
    circle(windowWidth*0.75,0,600);
    fill(255,0,0,70);
    rect(windowWidth*0.55,windowHeight*0.2,400,400,50);
}