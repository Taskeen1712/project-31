class Drop { constructor(x, y,) {
    var options = { 'restitution':0.8, 'friction':1.0, 'density':0.04, } 
    this.body = Bodies.circle(x, y,5, options); 
    this.radius=5
    World.add(world, this.body); } 

    updateY(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
    }

    display(){ 
       
           strokeWeight(4); 
           stroke("blue");
            fill(255); 
            ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
             }
             }

 
