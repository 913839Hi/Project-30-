class Box1 extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visiblity = 255;
    }
    display(){ 
      fill(66,212,245);

        if(this.body.speed < 3){
          super.display();
          var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop();
         }
        else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        pop();
         }
         
    }
  };