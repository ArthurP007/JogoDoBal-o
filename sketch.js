var arco , flecha,  planoFundo;
var imagemArco, imagemFlecha, imagem_balaoVerde, imagem_balaoVermelho, imagem_balaoRosa ,imagem_balaoAzul, imagemPlanoFundo;
var grupored;
var grupoblue;
var grupogreen;
var grupopik;
var grupoarrow;
var ponto = 0;

function preload(){
  
  imagemPlanoFundo = loadImage("background0.png");
  imagemFlecha = loadImage("arrow0.png");
  imagemArco = loadImage("bow0.png");
  imagem_balaoVermelho = loadImage("red_balloon0.png");
  imagem_balaoRosa = loadImage("pink_balloon0.png");
  imagem_balaoAzul = loadImage("blue_balloon0.png");
  imagem_balaoVerde = loadImage("green_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //criando plano de fundo background
  cenario = createSprite(0,0,400,400);
  cenario.addImage(imagemPlanoFundo);
  cenario.scale = 2.5
  
  // criando arco para lançar a fecha
  arco = createSprite(380,220,20,50);
  arco.addImage(imagemArco); 
  arco.scale = 1;
  
  grupoarrow = new Group();
  grupored = new Group();
  grupoblue = new Group();
  grupogreen = new Group();
  grupopink = new Group();
  
}

function draw() {
 background(0);
  
  balaoVermelho();
  balaoAzul();
  balaoVerde();
  balaoRosa();
  
  
  // movendo o solo
  cenario.velocityX = -3 

  if (cenario.x < 0){
    cenario.x = cenario.width/2;
  }
  
  // lançar flecha quando tecla de espaço é pressionada
  if (keyDown("space")) {
    criarFlecha();
  }
  
  arco.y = World.mouseY
 
  arco.depth = 5;
  
  if (grupoarrow.isTouching(grupored)){
    grupored.destroyEach();
    grupoarrow.destroyEach();
    ponto = ponto + 1;
  }
    
    if (grupoarrow.isTouching(grupoblue)){
    grupoblue.destroyEach();
    grupoarrow.destroyEach();
    ponto = ponto + 3;
    }
      
    if (grupoarrow.isTouching(grupogreen)){
    grupogreen.destroyEach();
    grupoarrow.destroyEach();
    ponto = ponto + 5;
    }
      
    if (grupoarrow.isTouching(grupopink)){
    grupopink.destroyEach();
    grupoarrow.destroyEach();
    ponto = ponto + 10;  
  }
  
  
  drawSprites();
  
  textSize(15);
  text("Pontuação: " + ponto,155,30);
}


// Criando flechas para o arco
 function criarFlecha() {
  var flecha= createSprite(100, 100, 60, 10);
  flecha.addImage(imagemFlecha);
  flecha.x = 360;
  flecha.y=arco.y;
  flecha.velocityX = -4;
  flecha.lifetime = 100;
  flecha.scale = 0.3; 
  grupoarrow.add(flecha);
}
 
//Balao Vermelho
function balaoVermelho(){
  
  if(frameCount%170===0){
    var vermelho;
    vermelho = createSprite(20,200,10,10);
    vermelho.y = (random(20,385));
    vermelho.addImage(imagem_balaoVermelho);
    vermelho.velocityX = 1.5;
    vermelho.scale = 0.1;
    vermelho.lifetime = 420
    vermelho.depth = 1;
    grupored.add(vermelho);
  }
}

//Balao Azul
function balaoAzul(){
  
  if(frameCount%260===0){
    var azul;
    azul = createSprite(20,200,10,10);
    azul.y = (random(20,370));
    azul.addImage(imagem_balaoAzul);
    azul.velocityX = 3;
    azul.scale = 0.1;
    azul.lifetime = 420;
    azul.depth = 2;
    grupoblue.add(azul);
  }
}

//Balao Verde
function balaoVerde() {
  if(frameCount%400===0){
    var verde;
    verde = createSprite(20,200,10,10);
    verde.y = (random(20,390));
    verde.addImage(imagem_balaoVerde);
    verde.velocityX = 5;
    verde.scale = 0.09;
    verde.lifetime = 420;
    verde.depth = 3;
    grupogreen.add(verde);
  }
}

//Balao Rosa
function balaoRosa() {
  if(frameCount%700===0){
    var rosa;
    rosa = createSprite(20,200,10,10);
    rosa.y = (random(20,390));
    rosa.addImage(imagem_balaoRosa);
    rosa.velocityX = 10;
    rosa.scale = 1.3;
    rosa.lifetime = 420;
    rosa.depth = 4;
    grupopink.add(rosa);
  }
}
