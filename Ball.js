class Ball {
    constructor(x,y,r){
        this.r = r;
        this.body=Bodies.circle(x,y,r);
        World.add(world,this.body);
    }

    display(){
        push();
        ellipseMode(CENTER);
        fill("yellow")
        ellipse(this.body.position.x, this.body.position.y, this.r*2)
    pop()
    }
}