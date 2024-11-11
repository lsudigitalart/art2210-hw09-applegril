var img1;
 var img2;
 var img3;
var img4;
var img5;
var sound1;
 var wolf1;
 var wolf2;
 function preload() {
	img1 = loadImage("wolf1.png");
 img2 = loadImage("wolf2.png"); 
	 img3 = loadImage("groundpath.jpg");
	 img4 = loadImage("grass lining.png");
	 img5 = loadImage("grass lining2.png");
     sound1 = loadSound("howl.mp3");
 }

 function setup() {
 createCanvas(720, 600);
	   let tempSpeed1 = random(0, 10);
	   let tempSpeed2 = random(0, 10);
//sound1.loop();
//tried to add sound but it did not go through and made the creen not show
 wolf1 = new Wolf(img1, 0, 30,tempSpeed1);
 wolf2 = new Wolf(img2, 0, 370,tempSpeed2);
	 
 }
 function draw() {
 background(204);
	 image(img3,0,0,720,600)
	 	 image(img4,0,70,720,600)
	 	 	 image(img5,0,-50,720,600)
             

 wolf1.update();
 wolf1.display();
 wolf2.update();
 wolf2.display();
 }
 function Wolf(img, tempX, tempY,tempSpeed) {  
 this.xpos = tempX;
 this.ypos = tempY;
 this.angle = random(0, TWO_PI);
 this.wolfImage = img;
 this.yoffset = 0.0;
this.speed = tempSpeed;
 this.update = function() {
 this.angle += 0.05;
 this.yoffset = sin(this.angle) * 20;
this.xpos = this.xpos + this.speed;

    if (this.xpos > width) {
      this.xpos = 0;
    }
 }
 this.display = function() {
 image(this.wolfImage, this.xpos, this.ypos + this.yoffset);
 }
 }