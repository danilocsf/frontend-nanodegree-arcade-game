/**
* @description Representa a classe de inimigos do jogo
* @constructor
* @param {string} sprite - (Opcional) Caminho da imagem do inimigo
*/
class Enemy extends Entity{

    constructor(sprite = 'images/enemy-bug.png'){
        super(sprite);
        /*Velocidade aleatória do inimigo*/
        this._enemySpeed = Math.floor(Math.random() * 300) + 10;
    }

    /**
    * @description Desenha o inimigo na tela
    */
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    update() {

    }
}
