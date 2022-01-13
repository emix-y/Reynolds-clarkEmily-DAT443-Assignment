//globalVariables 
var img, mySong, play;
//for asteroids
var asteroidCount = 15
const size = 75
var velocity = 4
var asteroids =[];

function preload(){
    img = loadImage('img/pexels-alex-andrews-816608.jpg')
    mySong = loadSound('assets/spaceSongForDAT443.mp3')
}

function setup() {
    rectMode(CENTER)
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");

    var mySong=new Audio("assets/spaceSongForDAT443.mp3")
    play = false;
    button = createButton("Play");
    button.addClass('btn');
    button.center();

    button.mousePressed(()=>{
        play = true;
        mySong.play();
        button.hide();
    });


   //asteroids
    for(let i = 0; i<asteroidCount; i++){
        asteroids.push({

            x: random(width),
            y: random(height)
        })
    }
}


function draw() {
   //console.log(play)
   image(img,0,0,width,height);

   //planets
   noStroke()
   fill(87, 181, 173,30)
   ellipse(300,200,200)
   ellipse(300,200,180)
   ellipse(300,200,160)
   ellipse(300,200,140)
   fill(43, 89, 85)
   ellipse(300,200,120)


   fill(221, 114, 224,30)
   ellipse(1000,500,200)
   ellipse(1000,500,180)
   ellipse(1000,500,160)
   ellipse(1000,500,140)
   fill(86, 45, 87)
   ellipse(1000,500,130)

   fill(237, 134, 7, 30)
   ellipse(1100,70,100)
   ellipse(1100,70,80)
   ellipse(1100,70,60)
   ellipse(1100,70,40)
   ellipse(1100,70,20)
   ellipse(1100,70,120)


    //asteroid 
    noStroke()
    fill(255,255,255)
    for(let i=0; i < asteroids.length; i++){
        var asteroid = asteroids[i];
        //main asteroid
        fill(92, 6, 19)
        ellipse(asteroid.x, asteroid.y, size)
        //details to asteroids
        stroke(0)
        strokeWeight(1)
        fill(115, 7, 23)
        ellipse(asteroid.x -25, asteroid.y, size/2,50)
        ellipse(asteroid.x +20,asteroid.y -15,size/2.5,30)
        ellipse(asteroid.x+15, asteroid.y+25, size/3,30)
        ellipse(asteroid.x-3, asteroid.y-30,size/4)
        
        fill(43, 3, 9)
        ellipse(asteroid.x -29, asteroid.y, size/2.5,50)
        ellipse(asteroid.x +24,asteroid.y -15,size/3,30)
        ellipse(asteroid.x+19, asteroid.y+27, size/3.5,30)
        ellipse(asteroid.x-3, asteroid.y-33,size/4.5)
        ellipse(asteroid.x-20, asteroid.y+30 ,size/15)
        ellipse(asteroid.x+13, asteroid.y+6,size/17)
        ellipse(asteroid.x-5, asteroid.y+26 ,size/15)
        ellipse(asteroid.x-2, asteroid.y-15 ,size/18)
        ellipse(asteroid.x, asteroid.y ,size/19)
        ellipse(asteroid.x+13, asteroid.y-30,size/19)
        ellipse(asteroid.x+30, asteroid.y+7 ,size/19)
        ;
        if(asteroid.x > width+size){
            asteroid.x = -size;
        }
        else{asteroid.x +=velocity;
        }
    }
    //change speed with left and right arrows
    if(keyIsDown(39) ){
        velocity += 1;
      }
      
      if(keyIsDown(37)){
        velocity -= 1;
      }



    //rocket
    noStroke()
    fill(237, 172, 98)
    quad(mouseX,mouseY, mouseX-200, mouseY, mouseX-350, mouseY+50, mouseX, mouseY+50)
    fill(250, 207, 103)
    quad(mouseX ,mouseY+100, mouseX-200, mouseY+100, mouseX-350, mouseY+50, mouseX, mouseY+50)
    fill(238,98,47)
    rect(mouseX-100, mouseY+40,120,20,5)
    stroke(238,98,47)
    strokeWeight(5)
    fill(49, 68, 85)
    quad(mouseX-20, mouseY, mouseX-125, mouseY, mouseX-85, mouseY -40, mouseX-20, mouseY-40)
    quad(mouseX-20, mouseY+100, mouseX-125, mouseY+100, mouseX-85, mouseY +140, mouseX-20, mouseY+140)
}