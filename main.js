function preload(){

}
function setup(){
canvas=createCanvas(800,700);
canvas.position(100,250);
video=createCapture(VIDEO);
tint_color="";
video.hide();
}

function draw(){
image(video, 0,0,800,700);
tint(tint_color);
}

function take_snapshot(){
save("Ahmad.png")
}
function filter_tint(){
tint_color=document.getElementById("color_name").value;
}