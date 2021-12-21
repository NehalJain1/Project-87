
// Create canvas variable
var canvas = new fabric.Canvas("myCanvas");
 ranger_y=1;
 ranger_x=1;

ranger_image_width = 350;
ranger_image_height = 430;

var ranger_image_object= "";

function new_image(get_image)
{
	// to upload images
fabric.Image.fromURL(get_image,function(Img){
ranger_image_object = Img;

ranger_image_object.scaleToHeight(ranger_image_height);
ranger_image_object.scaleToWidth(ranger_image_width);
ranger_image_object.set({
top:ranger_y,
left:ranger_x
});
canvas.add(ranger_image_object);
});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		// upload red ranger
		ranger_x = 20;
		new_image('red_ranger.png');
		console.log("r");
	}
	if(keyPressed == '71')
	{
		ranger_x = 200;
		// upload green ranger
		new_image('G-.png');
		console.log("g");
	}
	
	if(keyPressed == '89')
	{
		ranger_x =1000;
		// upload yellow ranger
		new_image('y.png');
		console.log("y");
	}
	if(keyPressed == '80')
	{
		ranger_x = 700;
		// upload pink ranger
		new_image('p.png');
		console.log("p");
	}
	if(keyPressed == '66')
	{
		ranger_x = 500;
	// upload blue ranger
	new_image('images__1_-removebg-preview (1).png');
	}
	
}

