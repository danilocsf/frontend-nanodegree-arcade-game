/**
* @description Representa uma classe abstrata com as propriedades e funcionalidades genéricas das entidades do jogo
* @constructor
* @param {string} sprite - Caminho da imagem da entidade
* @param {number} adjustment - Ajuste para posicionar a entidade no centro da figura atual
*/
class Entity {

  constructor(sprite, adjustment) {
    if (this.constructor === Entity) {
      // Não faz sentido uma classe abstrata ser instanciada
      throw new TypeError("A classe Entity não pode ser instanciada.");
    }

    if (this.update === Entity.update) {
      throw new TypeError("O método update deve ser implementado.");
    }

    if (this.moveToInitialPosition === Entity.moveToInitialPosition) {
      throw new TypeError("O método moveToInitialPosition deve ser implementado.");
    }

    this._sprite = sprite;
    /*Posição da entidade no eixo x*/
    this._x;
    /*Posição da entidade no eixo y*/
    this._y;
    /*Ajuste para posicionar a entidade no centro da figura atual*/
    this._adjustment = adjustment;
  }

  /**
  * @description Retorna a posição da entidade no eixo x
  * @returns {number} posição da entidade no eixo x
  */
  get x(){
    return this._x;
  }

  /**
  * @description Atualiza a posição no eixo x da entidade
  * @param {number} x - Nova posição do eixo x
  */
  set x(x){
    this._x = x;
  }

  /**
  * @description Retorna a posição da entidade no eixo y
  * @returns {number} posição da entidade no eixo x
  */
  get y(){
    return this._y;
  }

  /**
  * @description Atualiza a posição no eixo y da entidade
  * @param {number} x - Nova posição do eixo y
  */
  set y(y){
    this._y = y;
  }

  /**
  * @description Retorna o caminho da imagem da entidade
  * @returns {string} caminho da imagem da entidade
  */
  get sprite(){
    return this._sprite;
  }

  /**
   * @description Desenha a entidade na tela
   */
  render(){
    ctx.drawImage(Resources.get(this.sprite), this._x * CanvasInformation.xScale,
      this._y * CanvasInformation.yScale - this._adjustment);
  }

  /**
  * @description Atualiza a posição da entidade
  */
  update(){}

  /**
   * @description Posiciona a entidade em sua posição inicial
   */
  moveToInitialPosition(){}

}
