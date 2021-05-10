var canvas, bg;
var together;
var tom, tom1, tom2, tom3;
var jerry, jerry1, jerry2, jerry3; 
function preload() {
    bg = loadImage("images/garden.png");
    tom1 = loadAnimation("images/cat1.png");
    tom2 = loadAnimation("images/cat2.png", "images/cat3.png");
    tom3 = loadAnimation("images/cat4.png");
    jerry1 = loadAnimation("images/mouse1.png");
    jerry2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    jerry3 = loadAnimation("images/mouse4.png");
}
function setup(){
    createCanvas(1000,800);
    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tom1);
    tom.scale = 0.2;
    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerry1);
    jerry.scale = 0.1;
}
function draw() {
    background(bg);
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0;
        tom.addAnimation("tomLastImage", tom3);
        tom.x = 300;
        tom.scale = 0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerry3);
        jerry.scale = 0.1;
        jerry.changeAnimation("jerryLastImage");
    }
    drawSprites();
}
function keyPressed(){
    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("tomRunning", tom2);
        tom.changeAnimation("tomRunning");
        jerry.addAnimation("jerryTeasing", jerry2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}
