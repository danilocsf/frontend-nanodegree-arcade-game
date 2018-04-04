/**
* @description Representa a classe de inimigos do jogo
* @constructor
* @param {string} sprite - (Opcional) Caminho da imagem do inimigo
*/
class Enemy extends Entity{

    constructor(sprite = 'images/enemy-bug.png'){
        super(sprite);
    }
}
