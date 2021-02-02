const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 


var drop=[]
var maxdrops=100
function preload(){
    
}

function setup(){
    var canvas = createCanvas(1200,400);
   engine=Engine.create()
   world=engine.world

   //create
  umbrella= new Umbrella(1000,300)

    if(frameCount % 150 === 0){ 
        for(var i=0; i<maxDrops; i++){ 
            drops.push(new Drop(random(0,400), random(0,400))); } }


   
    
}

function draw(){
 Engine. update(engine)
 background
    
 //if(frameCount % 150 === 0){ 
    //for(var i=0; i<maxDrops; i++){ 
        //drops.push(new Drop(random(0,400), random(0,400))); } }

    if(frameCount%80===0){
        thunderCreateFrame=frameCount;
        thunder = createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1:thunder.addImage("1.png");
            break;
            case 2:thunder.addImage("2.png");
            break;
            default: break;
         }
    thunder.scale = random(0.3,0.6)     
    }    
     
      

 umbrella.display
 drop.display
 for(var i = 0; i<maxDrops; i++){ 
     drops[i].display(); 
     drops[i].updateY() }

     

}   

