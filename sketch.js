var cat, cat1, cat2, cat3, cat4;
var mouse, mouse1, mouse2, mouse3 ,mouse4;
var garden, gardenImg;

function preload() {
    cat1 = loadImage("images/cat1.png")
    cat2 = loadImage("images/cat2.png")
    cat3 = loadImage("images/cat3.png")
    cat4 = loadImage("images/cat4.png")

    mouse1 = loadImage("images/mouse1.png")
    mouse2 = loadImage("images/mouse2.png")
    mouse3 = loadImage("images/mouse3.png")
    mouse4 = loadImage("images/mouse4.png")

    gardenImg = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    
    cat = createSprite(200,200,50,50);

}

function draw() {

    background("blue");
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){



}
