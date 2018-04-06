/**
* @description Representa a classe de inimigos do jogo
* @constructor
* @param {string} sprite - (Opcional) Caminho da imagem do inimigo
*/
class Enemy extends Entity{

    constructor(sprite = 'images/enemy-bug.png'){
        super(sprite, 18);
        /*Velocidade aleatória do inimigo*/
        this._enemySpeed = this._generateEnemySpeed();
    }

    _generateEnemySpeed(){
        return Math.floor(Math.random() * 10) + 2;
    }

    /**
     * @description Altera as coordenadas do inimigo para a posição inicial
    */
    moveToInitialPosition(){
        this._x = -1;
        /*A linha em que o inimigo deverá aparecer muda sempre*/
        const max = CanvasInformation.lastStreetRow;
        const min = CanvasInformation.firstStreetRow;
        this._y = Math.floor(Math.random() * (max - min + 1)) + min;
        this._enemySpeed = this._generateEnemySpeed();
    }

    update() {
        if (this._x < CanvasInformation.numberOfColumns) {
            this._x += CanvasInformation.animationDelta * this._enemySpeed;
        } else {
            this.moveToInitialPosition();
        }
    }
}
