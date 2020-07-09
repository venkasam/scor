const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,Score, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1=new Ball(300,150,100)
    b=new Sling(box1.body,{x:300,y:150})
    a=new R(300,250,80,50)
    s=new R(380,250,80,50)
    d=new R(440,250,80,50)
    f=new R(520,250,80,50)
    g=new R(600,250,80,50)
    h=new R(340,300,80,50)
    j=new R(420,300,80,50)
    k=new R(500,300,80,50)
    l=new R(580,300,80,50)
    p=new Ground(600,380,1200,40)
var Score=50

   
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display()
    b.display()
    a.display()
    s.display()
    f.display()
    d.display()
    g.display()
    h.display()
    j.display()
    l.display()
    k.display()
    p.display()
    text("score:80"+Score,800,150)
 
}
function mouseDragged(){
    Matter.Body.setPosition(box1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    b.fly()

}
function keyPressed() {
    if(keyCode === 32){
b.attach(box1.body);
Matter.Body.setPosition(box1.body, {x:300 , y:150});
a=new R(300,290,80,50)
s=new R(380,290,80,50)
d=new R(440,290,80,50)
f=new R(520,290,80,50)
g=new R(600,290,80,50)
h=new R(340,340,80,50)
j=new R(420,340,80,50)
k=new R(500,340,80,50)
l=new R(580,340,80,50)
       
              
    }
}

