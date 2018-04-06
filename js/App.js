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

    get allImages(){
        return new Set(CanvasInformation.rowImages).add(this._player.sprite).add(this._enemies[0].sprite);
    }

    get allEntities(){
        return [].concat(this._enemies, this._player);
    }

    get allEnemies(){
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
