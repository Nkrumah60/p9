 var btn_red;
 var btn_green;

 function red_bg()
 {
background("red")
 }

 function green_bg()
 {
   
 background("green");

 }
  function setup() {
  createCanvas(400, 400);

  btn_red = createButton("RED") 
  btn_red.position(100,50) ;
  btn_red.mousePressed(red_bg)
 

  btn_green = createButton("GREEN");
  btn_green.position(250,50);
  btn_green.mousePressed(green_bg)

 }

 




 function draw() {
 if(keyIsDown(38)){
green_bg();


 }

 if(keyIsDown(40)){
    console.log("greeen");
     red_bg();
 }

 }



