class Paper2{
    constructor(x,y,r){
    var option={
'restitution':0.3,
'friction':0.5,
'density':1.2

}
this.x =x;
this.y =y;
this.r = r;

this.Body = Bodies.circle(this.x,this.y,this.r/2,option) ;
this.image = loadImage("paper.png");
//Matter.Body.Setscale(this.Body,0.1)
World.add(world,this.Body)
}
display(){

    var pos = this.Body.position;
push()
translate(pos.x,pos.y);
imageMode(CENTER);
//strokeWeight(3);
//fill(255,0,255);
//ellipse(0,0,this.r,this.r)
image(this.image,0,0,100,100);
pop();
}


}