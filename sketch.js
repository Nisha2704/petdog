//Create variables here
var dog, dogHappy;
var database;
var food, foodStock;
var count;

var dogImage;

function preload()
{
  dog = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dogImage = createSprite(250, 250);
  dogImage.addImage(dog);
  dogImage.scale=0.3
  

  var dataB = database.ref('Food');
  dataB.on("value", readStock);
}


function draw() {  
background(46, 139, 87);

fill("white");
stroke("white");
textSize(20);
text("Note: Press UP_ARROW Key to feed Harry Milk!",40,50);
text("Food Remaining:"+ count,150,150);

if( keyDown("w")) {
  foodAte(count);
  dogImage.addImage(dogHappy);
}


  drawSprites();
  //add styles here

}

function foodAte(x) {
  if(x<=0) {
    x = 0;
  }
  else {
    x=x - 1;
  }
 
  database.ref('/').update({
    Food: x 
  })
  }



function readStock(data) {
count = data.val();
}



