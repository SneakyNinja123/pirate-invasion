class Boat{
  constructor(x, y, width, height, boatPos){
    var options = {
        density: 1.0
    }
    this.body  = Bodies.rectangle(x,y,this.width,this.height,options) 
    World.add(world, this.body)
    this.width = width
    this.height = height
    this.boatPos = boatPos
    this.image = loadImage('/assets/boat.png')
  }

  display(){
      var pos = this.body.position
      var angle = this.body.angle
      push()
      translate(pos.x, pos.y)
      rotate(angle)
      imageMode(CENTER)
    image(this.image, 0, 0, this.width, this.height)
      pop()

  }
}