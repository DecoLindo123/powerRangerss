

var canvas = new fabric.Canvas('myCanvas');

 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var block_image_object= "";// nas linhas 75, 77,78,79 você usou o nome da variavel como ---> block_image_object <--- faça a troca

function newImage(getImage)
{
	fabric.Image.fromURL(getImage , function (Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(blockImageWidth); // nome da varável usado na linha 67 observe e substitua
	block_image_object.scaleToHeight(blockImageHeight);// nome da varável usado na linha 68 observe e substitua
	block_image_object.set({
	top:blockY, //nome da varável usado na linha 64 observe e substitua
	left:blockX //nome da varável usado na linha 65 observe e substitua
	});
	canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69') // aqui seria ---->  69 <----- tecla e
	{
		newImage('rr1.png');//observe o nome da função na linha 72 ---> newImage
		console.log("e")
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		newImage('gr.png');//observe o nome da função na linha 72 ---> newImage
		console.log("v")
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		newImage('yr.png');//observe o nome da função na linha 72 ---> newImage
		console.log("a")
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		newImage('pr.png');//observe o nome da função na linha 72 ---> newImage
		console.log("r")
	}
	if(keyPressed == '73')
	{
		blockX = 700;
	    newImage('br.png');//observe o nome da função na linha 72 ---> newImage
		console.log("i")
	}
	
}
