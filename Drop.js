class Drop{
constructor(x,y){
 var  options ={

friction:0.1
 }   
}
 thisrain=Bodies.circle(x,y,5,options);
 
 update(){
     if(this.thisrain.position.y>height){
         Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
     }
 }
 
}