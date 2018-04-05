let instance = null;

class App {

    constructor(){

        if(instance){
            return instance;
        }
        instance = this;
        this._player = new Player();
        this._enemies = [];
        this._initListener();
        this._fillEnemies(CanvasInformation.numberOfEnemies);
    }

    get allEnemies(){
        /*Mantém o array imutável */
        return [].concat(this._enemies);
    }

    get player(){
        return this._player;
    }

    _fillEnemies(numberOfEnemies){
        for(let i = 0; i < numberOfEnemies; i++){
            this._enemies.push(new Enemy());
        }
    }

    _initListener(){
        document.addEventListener('keyup', function(e) {
            let allowedKeys = {
                37: 'left',
                38: 'up',
                39: 'right',
                40: 'down'
            };
            this._player.handleInput(allowedKeys[e.keyCode]);
        });
    }

}

