/**
* @description Representa uma classe abstrata com as propriedades e funcionalidades genéricas das entidades do jogo
* @constructor
* @param {string} sprite - Caminho da imagem da entidade
*/
class Entity {

  constructor(sprite) {
    if (this.constructor === Entity) {
      // Não faz sentido uma classe abstrata ser instanciada
      throw new TypeError("A classe Entity não pode ser instanciada.");
    }

    this._sprite = sprite;
    /*Posição da entidade no eixo x*/
    this._x;
    /*Posição da entidade no eixo y*/
    this._y;
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

}
