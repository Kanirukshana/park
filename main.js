canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

Pinkycar_width = 75;
Pinkycar_height = 100;

background_image = "parkingLot.jpg";
Pinkycar_image = "Pinkycar.png";

Pinkycar_x = 5;
Pinkycar_y = 225;

function add() { 
	background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    Pinkycar_imgTag = new Image();
	Pinkycar_imgTag.onload = uploadPinkycar;
    Pinkycar_imgTag.src = Pinkycar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag , 0 , 0 , canvas.width , canvas.height);

}

function uploadPinkycar() {
	ctx.drawImage(Pinkycar_imgTag , Pinkycar_x , Pinkycar_y , Pinkycar_width ,   Pinkycar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function right()
{
       if(Pinkycar_x <= 700)
       {
             Pinkycar_x = Pinkycar_x + 10;
              console.log("Right is pressed , x =" + rover_x + ", = y =  "  + rover_y)
              uploadBackground();
              uploadPinkycar();
       }
}

function left()
{
       if(Pinkycar_x >= 700)
       {
             Pinkycar_x = Pinkycar_x - 10;
              console.log("left is pressed , x =" + rover_x + ", = y =  "  + rover_y)
              uploadBackground();
              uploadPinkycar();
       }
}

function up()
{
       if(Pinkycar_y >= 700)
       {
             Pinkycar_y = Pinkycar_y - 10;
              console.log("up is pressed , x =" + rover_x + ", = y =  "  + rover_y)
              uploadBackground();
              uploadPinkycar();
       }
}

function down()
{
       if(Pinkycar_y <= 700)
       {
             Pinkycar_y = Pinkycar_y + 10;
              console.log("Right is pressed , x =" + rover_x + ", = y =  "  + rover_y)
              uploadBackground();
              uploadPinkycar();
       }
}
