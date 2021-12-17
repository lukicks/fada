var starImg,bgImg, bg;
var star, starBody;
var fada, imgFada, vozFada;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fadaImg = loadAnimation("images/fariryImage1.png","images/fairyImage2.png");
    vozFada = loadSound("sound/JoyMusic.mp3");
}

function setup() {
    createCanvas(800, 750);

    fada = createSprite(200,300,50,50);
    fada.addAnimation(fadaImg);

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    bg = createSprite(400,375,800,750);
    bg.addImage(bgImg);

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw() {
    background(0);


    if (keyDown("a")) {
        fada.x = fada.x - 8;
    }

    if (keyDown("s")) {
        fada.x = fada.x + 8;
    }

    drawSprites();
}
