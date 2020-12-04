
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);


trash= new Paper(100,200,50,50)

line=createSprite(900,430,15,100);
line1=createSprite(1000,470,200,20);
line2=createSprite(1100,430,15,100);
line.shapeColor="red"
line1.shapeColor="red"
line2.shapeColor="red"

//create lines
line = Bodies.rectangle(900,430,15,100, {isStatic:true} );
World.add(world, line);
line1 = Bodies.rectangle(1000,470,200,20, {isStatic:true} );
World.add(world, line1);
line2 = Bodies.rectangle(1100,430,15,100 , {isStatic:true} );
World.add(world, line2); 


ground=new Ground(600,490,1200,20)

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

ground.display();

trash.display();

textFont("Bodoni MT Black")
textSize(40)
text("STORY TIME:-",30,50)


textFont("Bodoni MT Black")
textSize(20)
text("ONCE UPON A TIME A YOUNG BOY WAS EATING ICE – CREAM AND WAFFERS. AS HE FINISHED" , 30,100)
text("   HIS ICE – CREAM AND WAFFER ,HE THREW THE RAPPER ON THE GROUND . THE RAPPER WAS VERY  ",10,130)
text("SAD AND HE WAS CRYING LOUDLY. SUDDENLY THE OTHER RAPPERS LISTEN HIS VOICE AND SAID",30,160)
text("  THAT RAPPER NOT TO CRY , HUMANS  ALWAYS THROW US ON THE GROUND AND NOW WE  ",20,190)
text(" ARE OF NO USE . I WISH IF HUMANS CAN USE US THE WAY THEY USED BEFORE . AFTER FEW DAYS,   ",25,220)
text(" A SCIENTIST INTERODUCES A MACHINE THAT CAN RECYCLE THE PLASTIC WASTES.NOW ANOTHER ",25,250)
text(" SCIENTIST INTRODUCES THE DUSTBIN , WHERE WE CAN KEEP WASTE PLASTICS THAN RECYCLE IT.",28,280)

textFont("Bodoni MT Black")
textSize(40)
text("NOW THE RAPPERS WERE VERY HAPPY ",30,330);

  drawSprites();
 
}

function keyPressed(){

	if (keyCode === 32){

		Matter.Body.applyForce(trash.body,trash.body.position,{x:170,y:-150})

	}


}



