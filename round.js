class Ball{
    constructor(x,y,radius){
        var options={
     "restitution":1.0,
     "density":1.0,
     "isStatic":false




        }

this.body=Bodies.circle(x,y,radius,options)
this.radius=radius
this.color=color(random(0,225),random(0,255),random(0,2))
this.x=x 
this.y=y 
World.add(world,this.body)


    }

display(){
     
  push()
fill("blue")
strokeWeight(30)
translate(this.body.position.x,this.body.position.y)
ellipseMode(CENTER)
ellipse(0,0,this.radius)
pop()







}










}


