let instance = null;

class App {

    constructor(){

        if(instance){
            return instance;
        }
        instance = this;
        this._player = new Player();
        this._enemies = [];
        this._fillEnemies(CanvasInformation.numberOfEnemies);
        this._addPlayerKeyListener();
    }

    get allEntities(){
        return [].concat(this._enemies, this._player);
    }

    get player(){
        return this._player;
    }

    _fillEnemies(numberOfEnemies){
        for(let i = 0; i < numberOfEnemies; i++){
            this._enemies.push(new Enemy());
        }
    }

    _addPlayerKeyListener(){
        document.addEventListener('keyup', e => {
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
