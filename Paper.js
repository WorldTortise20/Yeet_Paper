class Paper{
    constructor(x,y){
        var options ={
            restitution: 0.5,
            friction: 5,
            density: 12,
            isStatic: false
        }
        this.body = Bodies.circle(x,y,2, options)
        World.add(world,this.body);
    }
    display(){
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.diameter);
    }

}