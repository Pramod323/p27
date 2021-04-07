class Bob{
    constructor(x, y){
        var options = {
             'isStatic':false,
             'restitution':1,
             'friction':0,
             'density':1
        }
        this.body = Matter.Bodies.circle(x, y, 23, options);

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        stroke(1);
        fill("pink");
        ellipse(0,0,45);
        pop();
    }
}