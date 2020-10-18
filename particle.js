class Particle{
    constructor(){
        var op={
            restitution:0.4,
        }
     
        this.body=Bodies.circle(245,0,10,op);
        this.color=color[random[0,255],random[0,255],random[0,255]];
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var an=this.body.angle;
        push();
        tanslate(pos.x,pos.y);
        rotate(an);

        noStoke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}