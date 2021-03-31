const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700, 400-10-70,70,70);
    pig1 = new PIG(800, 400 - 10 - 50)
    box2 = new Box(900, 400 - 10 - 70,70,70);
    log1= new LOG(800,400-10-70-20,  300, PI/2);
    
    box3 = new Box(700, 400-10-70-90,70,70);
    pig2 = new PIG(800, 400 - 10 - 50-70)
    box4 = new Box(900, 400 - 10 - 70-90,70,70);
    log2 = new LOG(800,400-10-70-20-90-20,  300, PI/2);

    pig3 = new PIG(800, 400 - 10 - 50-70-80)
    
    log3 = new LOG(750,400-10-70-20-90-20-20,  170, PI/4);
    
    log4 = new LOG(850,400-10-70-20-90-20-20,  170, PI/-4);
    
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    pig1.display();
    box2.display();
    log1.display();
    
    box3.display();
    pig2.display();
    box4.display();
    log2.display();
    pig3.display();

    log3.display();
    log4.display();
    ground.display();
}