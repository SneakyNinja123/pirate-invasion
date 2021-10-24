class Cannonball{
    constructor(x,y){
        this.radius = 30
        var options = {
            isStatic: true
        }
        this.body  = Bodies.circle(x,y,this.radius,options)
        World.add(world,this.body)
        this.image = loadImage("./assets/cannonball.png")

    }

    shoot(){
        var newAngle = cannon.angle - 28
        newAngle = newAngle*(3.14/180)
        var velocity = p5.Vector.fromAngle(angle, [length])
        Matter.Body.setStatic(this.body, false)
        Matter.Body.setVelocity(this.body, velocity)
    }

    display(){
       image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
        
    }

}