class Box{

    constructor(x,y,width,height){
    
    var option = {
    
    restitution: 0.2,
     friction: 0.3 ,
     density :1
    
    }
    
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,option);

    World.add(world,this.body);
    this.Visiblity=255;
    
    
    }
    
        display(){
            if(this.body.speed < 3){
                var  pos = this.body.position
                var angle = this.body.angle;
                push();
        
                translate(pos.x,pos.y);
                rotate(angle);
                rectMode(CENTER);
                fill('red');
                rect(0,0,this.width,this.height);
        
                pop();
               }
               else{
                 World.remove(world, this.body);
                 push();
                 this.Visiblity = this.Visiblity - 5;
                 tint(255,this.Visiblity);
                 fill(255, 255, 255,tint)
            
                 //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            
                 pop();
            
            
               }
          
    
            }
    
                score(){
              //console.log(this.Visiblity)
                  if(this.Visiblity<0 && this.Visiblity>-1005 ){
            
                      scoree++;
            
                  }
            
             }




    }
