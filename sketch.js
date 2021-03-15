const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var backgroundImg,platform;
var box, slingShot;
var ground;

var scoree= 0;
function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;


 ground=new Ground (600,390,1200,5)
    //platform = new Ground(150, 305, 300, 170);

    b1 = new Box(700,320,70,70);
    b2 = new Box(900,320,70,70);
    b3 = new Box(900, 280,70,70);
    b4 = new Box(1000,320,70,70);
    b5 = new Box(1000,280,70,70);
    b6 = new Box(800,320,70,70);
    b7 = new Box(800, 280,70,70);
    b8 =  new Box(1100,320,70,70);
    b9 = new Box(1100,280,70,70);
    b10 = new Box(700,280,70,70);


    box = new Hex(200,320);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(box.body,{x:200, y:320});
}

function draw(){
    background("blue");
    Engine.update(engine);
    strokeWeight(4);
    getTime();
    textSize(20);
    text("Score:" + scoree,1000,50 );
  
    //ground.display();
   // platform.display();

    box.display();

    b1.display();
    b1.score();
    b2.display();
    b2.score();
    b3.display();
    b3.score();
    b4.display();
    b4.score();
    b5.display();
    b5.score();
    b6.display();
    b6.score();
    b7.display();
    b7.score();
    b8.display();
    b8.score();
    b9.display();
    b9.score();
    b10.display();
    b10.score();

   
ground.display();

    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(box.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){

    if(keyCode === 32){

        slingshot.attach(box.body);

    }
}
async function getTime(){
    var response = await fetch("http://worldclockapi.com/api/json/est/now");
    var responseJSON= await response.json();
    
    //var responseJSON="{abbreviation:+06,client_ip:27.0.59.29,datetime:2020-12-23T15:52:27.319368+06:00,day_of_week:3,day_of_year:358,dst:false,dst_from:null,dst_offset:0,dst_until:null,raw_offset:21600,timezone:Asia/Almaty,unixtime:1608717147,utc_datetime:2020-12-23T09:52:27.319368+00:00,utc_offset:+06:00,week_number:52}";
    
    
    var currentDateTime=responseJSON.currentDateTime;
    var hour=currentDateTime.slice(11,13)
    console.log(hour)
    if(hour>=6 && hour<=19){
    background("black")
    
    }else{
       background("blue")
    
    }
    //backgroundImg=loadImage(bg);
    
    
    }