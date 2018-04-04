/**
* @description classe controladora
*/
class App {

    static INSTANCE;


    constructor(){

        if(INSTANCE){
            return INSTANCE;
        }
        this.INSTANCE = this;
        const numberOfEnemies = 5;

        this._player = new Player();
        this._enemies [];
        this._initListener();
        this._fillEnemies(numberOfEnemies);
    }

    get allEnemies(){
        return [].concat(this._enemies);
    }

    get player(){
        return this._player;
    }

    _fillEnemies(numberOfEnemies){
        for(let i = 0; i < numberOfEnemies; i++){
            _enemies.push(new Enemy());
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

