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
        this.x = 2;
        this.y = CanvasInformation.numberOfRows - 1;
    }

     /**
     * @description gerencia as ações do jogador(teclas cima, baixo, esquerda e direita)
     * @param {string} moveTo - direção a qual o jogador deve mover
    */
    handleInput(moveTo) {
        switch(moveTo){
            case "up":
                this._moveUp();
            break;
            case "right":
                this._moveRight();
            break;
            case "left":
                this._moveLeft();
            break;
            case "down":
                this._moveDown();
            break;

        }
    }
    /**
     * @description atualiza a posição do jogador para uma casa para esquerda,
     * caso não esteja na borda da tela.
     */
    _moveLeft(){
        if(this.x > 0){
            this.x--;
        }
    }

    /**
     * @description atualiza a posição do jogador para uma casa para direita,
     * caso não esteja na borda da tela.
     */
    _moveRight(){
        if(this.x < CanvasInformation.numberOfColumns - 1){
            this.x++;
        }
    }

    /**
     * @description atualiza a posição do jogador para uma casa para baixo,
     * caso não esteja na borda da tela.
     */
    _moveDown(){
        if(this.y < CanvasInformation.numberOfRows - 1){
            this.y++;
        }
    }

    /**
     * @description atualiza a posição do jogador para uma casa para cima,
     * caso não esteja na borda da tela.
     */
    _moveUp(){
        if(this.y > 0){
            this.y--;
        }
    }

    update(){
        if(this.y === 0){
            /**Jogador ganhou*/
            this.moveToInitialPosition();
        }
    }

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x * CanvasInformation.xScale,
        this.y * CanvasInformation.yScale - 30); // -30 para ajustar o jogador no centro da figura atual
    }
}
