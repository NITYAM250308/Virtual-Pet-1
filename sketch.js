//Create variables here
var dog, happyDog
var database 
var foodS, foodStock;
var foodRemaining=20;

function preload()
{
	//load images here
  dogImg=loadImage("images/dogImg1.png");
  happyDog=loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database();

  dog=createSprite(400,400)
  dog.addImage(dogImg);
  dog.scale=0.5

  foodStock=database.ref('Food');
   foodStock.on("value",readStock)
  
}


function draw() {  
background(46, 139, 87)

  textSize(18);
  fill("white");
  text("Food Remaining : "+foodRemaining,300,100)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    foodRemaining=foodRemaining-1
    dog.addImage(happyDog)
    dog.scale=0.5
  }

  drawSprites();
  //add styles here
  textSize(18)
  fill ("white")
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",200,50)

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food : x
  })
}



