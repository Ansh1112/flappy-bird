var pipes=[]



function setup(){
    var canvas = createCanvas(window.innerWidth,window.innerHeight);
    
    
}

function draw(){
 background("white")
 if(frameCount % 150===0){
     pipes.push(new Pipe())

    
 }     
 for(var pipe of pipes){
     pipe.show()
     pipe.update()
 }
}

