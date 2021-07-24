class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage('images/Ground.png');
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill(0,255,0);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        this.image.scale = 0.8;
    }
}