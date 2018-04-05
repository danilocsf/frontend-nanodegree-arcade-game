/**
* @description Representa a classe do jogador do jogo
* @constructor
* @param {string} sprite - (Opcional) Caminho da imagem do jogador
*/
class Player extends Entity{

    constructor(sprite = 'images/char-boy.png'){
        super(sprite);
        this.moveToInitialPosition();
    }

    /**
     * @description Altera as coordenadas do jogador para a posição inicial
    */
    moveToInitialPosition(){

    }
}
