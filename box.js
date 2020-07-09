class Box {
  constructor(x1, y1) {
    var options = {
        'restitution':0.0,
        'friction':1.0,
        'density':1.0

    }
    this.body = Bodies.polygon(this.x,this.y,3,9, options);
    this.x=x1
    this.y=y1
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("red");
    (this.x,this.y,sides,radius);
    pop();
  }
};
