const sprites = new Image();
sprites.src = '../sprites.png';

const flappyBird = {
  spriteX: 0,
  spriteY: 0,
  largura: 33,
  altura: 24,
  x: 10,
  y: 50,
  atualiza(){
    flappyBird.y ++;
  },
  desenha(){
    contexto.drawImage(
      sprites,
      flappyBird.spriteX, 
      flappyBird.spriteY,  
      flappyBird.largura, 
      flappyBird.altura, 
      flappyBird.x, 
      flappyBird.y, 
      flappyBird.largura, 
      flappyBird.altura 
    );
  }
}

module.exports = flappyBird;