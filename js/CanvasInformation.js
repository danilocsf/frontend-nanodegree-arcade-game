/**
 * @description Classe de suporte contendo informações a respeito das informações gráficas do jogo.
*/
class CanvasInformation {

    constructor(){
        if (this.constructor === CanvasInformation) {
            // Terá apenas métodos estáticos.
            throw new TypeError("A classe CanvasInformation não pode ser instanciada.");
          }
    }

    /**
    * @description Retorna a largura da tela do jogo
    * @returns {number} largura da tela do jogo
    */
    static get width(){
        return 505;
    }

    /**
    * @description Retorna a altura da tela do jogo
    * @returns {number} altura da tela do jogo
    */
    static get height(){
        return 606;
    }

   /**
   * @description Retorna a o número de colunas do jogo
   * @returns {number} número de colunas do jogo
   */
   static get numberOfColumns(){
        return 5;
   }

  /**
  * @description Retorna a o número de linhas do jogo
  * @returns {number} número de linhas do jogo
  */
   static get numberOfRows(){
        return 6;
   }

  /**
  * @description Retorna as imagens referentes ao cenário do jogo, na ordem em que devem ser renderizadas.
  * @returns {array} imagens referentes ao cenário do jogo
  */
   static get rowImages(){
        return [
            'images/water-block.png',   // Top row is water
            'images/stone-block.png',   // Row 1 of 3 of stone
            'images/stone-block.png',   // Row 2 of 3 of stone
            'images/stone-block.png',   // Row 3 of 3 of stone
            'images/grass-block.png',   // Row 1 of 2 of grass
            'images/grass-block.png'    // Row 2 of 2 of grass
        ]
   }

   /**
    * @description Para facilitar o posicionamento dos elementos na tela é utilizada uma escala.
    * Para considerar que o eixo X tenha o mesmo tamanho que a quantidade de colunas, deve-se
    * multiplicar a posíção da coluna desejada por esse valor.
    * @returns {number} escala para o eixo x
    */
   static get xScale(){
        return 101;
   }

   /**
    * @description Para facilitar o posicionamento dos elementos na tela é utilizada uma escala.
    * Para considerar que o eixo y tenha o mesmo tamanho que a quantidade de linhas, deve-se
    * multiplicar a posíção da linha desejada por esse valor.
    * @returns {number} escala para o eixo y
    */
   static get yScale(){
        return 83;
   }

   /**
    * @description Retorna o número de inimigos do jogo
    * @returns {number} número de inimigos do jogo
    */
   static get numberOfEnemies(){
       return 5;
   }
}
