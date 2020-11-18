var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score = 0
var player, form,game;
var player1,player2;
var players, bullet;
var fruits;
var fruitGroup, bulletGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
// create the variables for the score and displaying scores. and intialize with zero

function preload(){
  back_img = loadImage("images/bg.jpg");
  player_img = loadImage("images/spaceShip.png");
  fruit1_img = loadImage("images/alien1.png");
  fruit2_img = loadImage("images/alien2.png");
  fruit3_img = loadImage("images/alien3.png");
  fruit4_img = loadImage("images/alien4.png");
  
  bulletGroup = new Group();
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}