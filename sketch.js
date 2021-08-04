var angel,bow,arrow;
var p1,p2,bgImg,ladder;


function preload(){
bgImg=loadImage("bg.jpg");
  


}

function setup() {
createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,320)
  bg.addImage(bgImg);
  bg.scale = 3.0;
  bg.velocityX=1.0;
  
  peopleGroup1=new Group();
  peopleGroup2=new Group();
  peopleGroup3=new Group();
  
  

//creating the angel sprite
angel = createSprite(displayWidth-100, displayHeight-300, 50, 50);
 //angel.addImage(shooterImg)
  // angel.scale = 0.3
   angel.debug =false
   //angel.setCollider("rectangle",0,0,100,100)


}


function draw() {
  background("pink"); 

  if(bg.x>displayWidth/2+200){
    bg.x=displayWidth/2
  }




  //moving the angel up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  angel.y = angel.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 angel.y = angel.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 arrow=createSprite(angel.x,angel.y)
arrow.velocityX=-2;  
arrow.bounceOff(peopleGroup1,peopleHit1)
  //angel.addImage(shooter_shooting)
 
}


//angel goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
 // angel.addImage(shooterImg)
}



spawnPeople1();
spawnPeople2();
spawnPeople3();

/*
if(peopleGroup1.isTouching(arrow)){
  peopleGroup1.shapeColor="yellow"
}
*/




drawSprites();

}
function spawnPeople1(){
  if(frameCount %110  === 0){
    people1 = createSprite(0,random(50,displayHeight-100),10,10);
    people1.shapeColor="red";
   // people.addImage("people",peopleimg);
    people1.velocityX = 3;
   // people.scale = 2;
    people1.lifetime = 420;
    peopleGroup1.add(people1);
  }
}
function spawnPeople2(){
  if(frameCount %160  === 0){
    people2 = createSprite(0,random(50,displayHeight-100),10,10);
    people2.shapeColor="green";
   // people.addImage("people",peopleimg);
    people2.velocityX = 3;
   // people.scale = 2;
    people2.lifetime = 420;
    peopleGroup2.add(people2);
  }
}
function spawnPeople3(){
  if(frameCount %210  === 0){
    people3 = createSprite(0,random(50,displayHeight-100),10,10);
    people3.shapeColor="blue";
   // people.addImage("people",peopleimg);
    people3.velocityX = 3;
   // people.scale = 2;
    people3.lifetime = 420;
    peopleGroup3.add(people3);
  }
}
function peopleHit1(arrow,people1){
  people1.shapeColor="yellow"

}


