var background1,background1Img,play,playimg,logo,logoimg,background2,background2Img;
var player,playerImg,enemy0img,enemy1img,enemy2img;
var laser1,laser1img,laser2,laser2img,explosen,explosenimg;
var selectSnd,startSnd,laserSnd,musicSnd;
var gameState = 0,soundState = 1;
var enemy0,enemy1,enemy2,enemy3,enemy4,enemy5;

function preload() {
background1Img = loadImage("Sprites/BackGround.jpg")
playimg = loadImage("Sprites/Play.png")
logoimg = loadImage("Sprites/Logo.png")
background2Img = loadImage("Sprites/background2.jpg")

playerImg = loadImage("Sprites/Ship/Your Ship.png")
enemy0img = loadImage("Sprites/Ship/Loot Ship.png")
enemy1img = loadImage("Sprites/Ship/Fighter Ship.png")
enemy2img = loadImage("Sprites/Ship/Main Ship.png")

laser1img = loadImage("Sprites/Laser/Fighter Laser.png")
laser2img = loadImage("Sprites/Laser/Your Laser.png")
explosenimg = loadImage("Sprites/Explosen.png")

selectSnd = loadSound("Sound/Start Sound.wav")
startSnd = loadSound("Sound/Start.ogg")
laserSnd = loadSound("Sound/laser.mp3")
MusicSnd = loadSound("Sound/Music.mp3")

}
function setup() {

  createCanvas(displayWidth,displayHeight);
  
  background1 = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  background1.addImage(background1Img);

  play = createSprite(800,600)
  play.addImage(playimg)

  logo = createSprite(800,300)
  logo.addImage(logoimg)

  background2 = createSprite(displayWidth/2,-1600,displayWidth,displayHeight);
  background2.addImage(background2Img);
  background2.visible = false

  player = createSprite(displayWidth/2,700) 
  player.addImage(playerImg)
  player.visible = false



  enemy0 = createSprite(768,400);
  enemy0.addImage(enemy0img);
  enemy0.visible = false;
  enemy1 = createSprite(384,-400);
  enemy1.addImage(enemy0img);
  enemy1.visible = false;
  enemy2 = createSprite(1152,-400);
  enemy2.addImage(enemy0img);
  enemy2.visible = false;
  enemy3 = createSprite(768,-150);
  enemy3.addImage(enemy0img);
  enemy3.visible = false;
  enemy4 = createSprite(60,-400);
  enemy4.addImage(enemy0img);
  enemy4.visible = false;
  enemy5 = createSprite(1476,-400);
  enemy5.addImage(enemy0img);
  enemy5.visible = false;
  enemy6 = createSprite(60,-400);
  enemy6.addImage(enemy0img);
  enemy6.visible = false;
  enemy7 = createSprite(384,-150);
  enemy7.addImage(enemy0img);
  enemy7.visible = false;
  enemy8 = createSprite(768,-400);
  enemy8.addImage(enemy0img);
  enemy8.visible = false;
  enemy9 = createSprite(1152,-150);
  enemy9.addImage(enemy0img);
  enemy9.visible = false;
  enemy10 = createSprite(1476,-400);
  enemy10.addImage(enemy0img);
  enemy10.visible = false;
  enemy11 = createSprite(60,-400);
  enemy11.addImage(enemy0img);
  enemy11.visible = false;
  enemy12 = createSprite(384,-400);
  enemy12.addImage(enemy0img);
  enemy12.visible = false;
  enemy13 = createSprite(768,-400);
  enemy13.addImage(enemy0img);
  enemy13.visible = false;
  enemy14 = createSprite(768,-150);
  enemy14.addImage(enemy0img);
  enemy14.visible = false;
  enemy15 = createSprite(1152,-400);
  enemy15.addImage(enemy0img);
  enemy15.visible = false;
  enemy16 = createSprite(1476,-400);
  enemy16.addImage(enemy0img);
  enemy16.visible = false;
  enemy17 = createSprite(60,-400);
  enemy17.addImage(enemy0img);
  enemy17.visible = false;
  enemy18 = createSprite(60,-150);
  enemy18.addImage(enemy0img);
  enemy18.visible = false;
  enemy19 = createSprite(384,-400);
  enemy19.addImage(enemy0img);
  enemy19.visible = false;
  enemy20 = createSprite(768,-400);
  enemy20.addImage(enemy0img);
  enemy20.visible = false;
  enemy21 = createSprite(768,-150);
  enemy21.addImage(enemy0img);
  enemy21.visible = false;
  enemy22 = createSprite(1152,-400);
  enemy22.addImage(enemy0img);
  enemy22.visible = false;
  enemy23 = createSprite(1476,-400);
  enemy23.addImage(enemy0img);
  enemy23.visible = false;
  enemy24 = createSprite(1476,-150);
  enemy24.addImage(enemy0img);
  enemy24.visible = false;
  enemy25 = createSprite(60,-400);
  enemy25.addImage(enemy0img);
  enemy25.visible = false;
  enemy26 = createSprite(60,-150);
  enemy26.addImage(enemy0img);
  enemy26.visible = false;
  enemy27 = createSprite(384,-400);
  enemy27.addImage(enemy0img);
  enemy27.visible = false;
  enemy28 = createSprite(384,-150);
  enemy28.addImage(enemy0img);
  enemy28.visible = false;
  enemy29 = createSprite(768,-400);
  enemy29.addImage(enemy0img);
  enemy29.visible = false;
  enemy30 = createSprite(768,-150);
  enemy30.addImage(enemy0img);
  enemy30.visible = false;
  enemy31 = createSprite(1152,-400);
  enemy31.addImage(enemy0img);
  enemy31.visible = false;
  enemy32 = createSprite(1152,-150);
  enemy32.addImage(enemy0img);
  enemy32.visible = false;
  enemy33 = createSprite(1476,-400);
  enemy33.addImage(enemy0img);
  enemy33.visible = false;
  enemy34 = createSprite(1476,-150);
  enemy34.addImage(enemy0img);
  enemy34.visible = false;
  enemy35 = createSprite(60,-400);
  enemy35.addImage(enemy0img);
  enemy35.visible = false;
  enemy36 = createSprite(384,-400);
  enemy36.addImage(enemy0img);
  enemy36.visible = false;
  enemy37 = createSprite(768,-400);
  enemy37.addImage(enemy1img);
  enemy37.visible = false;
  enemy38 = createSprite(1152,-400);
  enemy38.addImage(enemy0img);
  enemy38.visible = false;
  enemy39 = createSprite(1476,-400);
  enemy39.addImage(enemy0img);
  enemy39.visible = false;
  enemy40 = createSprite(60,-150);
  enemy40.addImage(enemy1img);
  enemy40.visible = false;
  enemy41 = createSprite(384,-400);
  enemy41.addImage(enemy0img);
  enemy41.visible = false;
  enemy42 = createSprite(768,-150);
  enemy42.addImage(enemy1img);
  enemy42.visible = false;
  enemy43 = createSprite(1152,-400);
  enemy43.addImage(enemy0img);
  enemy43.visible = false;
  enemy44 = createSprite(1476,-150);
  enemy44.addImage(enemy1img);
  enemy44.visible = false;
  enemy45 = createSprite(60,-400);
  enemy45.addImage(enemy1img);
  enemy45.visible = false;
  enemy46 = createSprite(60,-150);
  enemy46.addImage(enemy0img);
  enemy46.visible = false;
  enemy47 = createSprite(384,-150);
  enemy47.addImage(enemy1img);
  enemy47.visible = false;
  enemy48 = createSprite(768,-150);
  enemy48.addImage(enemy0img);
  enemy48.visible = false;
  enemy49 = createSprite(768,-400);
  enemy49.addImage(enemy1img);
  enemy49.visible = false;
  enemy50 = createSprite(1152,-150);
  enemy50.addImage(enemy1img);
  enemy50.visible = false;
  enemy51 = createSprite(1476,-150);
  enemy51.addImage(enemy0img);
  enemy51.visible = false;
  enemy52 = createSprite(1476,-400);
  enemy52.addImage(enemy1img);
  enemy52.visible = false;
  enemy53 = createSprite(60,150);
  enemy53.addImage(enemy1img);
  enemy53.visible = false;
  enemy54 = createSprite(384,150);
  enemy54.addImage(enemy1img);
  enemy54.visible = false;
  enemy55 = createSprite(384,400);
  enemy55.addImage(enemy1img);
  enemy55.visible = false;
  enemy56 = createSprite(768,400);
  enemy56.addImage(enemy1img);
  enemy56.visible = false;
  enemy57 = createSprite(1152,400);
  enemy57.addImage(enemy1img);
  enemy57.visible = false;
  enemy58 = createSprite(1152,150);
  enemy58.addImage(enemy1img);
  enemy58.visible = false;
  enemy59 = createSprite(1476,150);
  enemy59.addImage(enemy1img);
  enemy59.visible = false;



//startSnd.play()
}
function draw() {
  background(255,255,0);
  edges = createEdgeSprites();
   console.log(displayWidth/4*3);


   player.bounceOff(edges[1]);
   player.bounceOff(edges[0]);
   player.velocityX = 0

   playerImg.resize(160,165);
   enemy0img.resize(100,169);
   enemy1img.resize(103,175);
   enemy2img.resize(600,569);
   laser1img.resize(14,75);
   laser2img.resize(14,75);

 if (mousePressedOver(play)&& gameState == 0) {
   //selectSnd.play();
   logo.velocityX = - 100;
   play.velocityX = - 100;
 }
 if (logo.x < 0 && play.x < 0) {
  gameState = 1;
 }

 if (gameState == 1) {
   background1.destroy();
   play.destroy();
   logo.destroy();
   background2.visible = true;
   background2.velocityY = 5;
   player.visible = true;
   startSnd.stop();
   move();
   shoot();
   //enemy0.visible = true;
    enemy1.visible = true;
    enemy2.visible = true;
    enemy3.visible = true;
    enemy4.visible = true;
    enemy5.visible = true;
    enemy6.visible = true;
    enemy7.visible = true;
    enemy8.visible = true;
    enemy9.visible = true;
   enemy10.visible = true;
   enemy11.visible = true;
   enemy12.visible = true;
   enemy13.visible = true;
   enemy14.visible = true;
   enemy15.visible = true;
   enemy16.visible = true;
   enemy17.visible = true;
   enemy18.visible = true;
   enemy19.visible = true;
   enemy20.visible = true;
   enemy21.visible = true;
   enemy22.visible = true;
   enemy23.visible = true;
   enemy24.visible = true;
   enemy25.visible = true;
   enemy26.visible = true;
   enemy27.visible = true;
   enemy28.visible = true;
   enemy29.visible = true;
   enemy30.visible = true;
   enemy31.visible = true;
   enemy32.visible = true;
   enemy33.visible = true;
   enemy34.visible = true;
   enemy35.visible = true;
   enemy36.visible = true;
   enemy37.visible = true;
   enemy38.visible = true;
   enemy39.visible = true;
   enemy40.visible = true;
   enemy41.visible = true;
   enemy42.visible = true;
   enemy43.visible = true;
   enemy44.visible = true;
   enemy45.visible = true;
   enemy46.visible = true;
   enemy47.visible = true;
   enemy48.visible = true;
   enemy49.visible = true;
   enemy50.visible = true;
   enemy51.visible = true;
   enemy52.visible = true;
   enemy53.visible = true;
   enemy54.visible = true;
   enemy55.visible = true;
   enemy56.visible = true;
   enemy57.visible = true;
   enemy58.visible = true;
   enemy59.visible = true;


   /*if (soundState == 1) {
    MusicSnd.loop()
    soundState = 2
   }*/
 }

 if (background2.y >= 2500) {
  background2.y = -1600;
 }

  drawSprites();
}

function move() {

if (keyDown("a")||(keyDown("left"))) {
  player.velocityX = -7;

}
 
if (keyDown("d")||(keyDown("right"))) {
  player.velocityX = 7;
  }
}

function shoot() {
   if (keyWentDown("enter") /* && !keyDown("d") && !(keyDown("right")) && !keyDown("a") &&!(keyDown("left"))*/ ) {
    laser = createSprite(player.x,player.y + -82.5);
    laser.velocityY = -5;
    laser.addImage(laser2img);
    //laserSnd.play();
  } 
   }

/* X = 60,384,768,1152
   Y = 150 , 400 */