function Character(image, top, left, size,speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed ;

    this.getCharacterElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += this.speed;
    }
    this.moveLeft = function(){
            this.left -= this.speed;
        }
    this.moveUp = function(){
            this.top += this.speed;
        }
    this.moveDown = function(){
            this.top -= this.speed;
        }

}

let character1 = new Character('coww.png', 15, 15, 200,20);

function start() {
    if (character1.left < window.innerWidth - character1.size && character1.top == 15) {
        character1.moveRight();
    } else if (character1.left > window.innerWidth - character1.size && window.innerHeight - character1.size > character1.top) {
        character1.moveDown();
    } else if (window.innerHeight - character1.size < character1.top) {
        character1.moveLeft();
    }
    if (character1.left === 0) {
        character1.moveUp();
    }

    document.getElementById('game').innerHTML = character1.getCharacterElement();
    setTimeout(start, 100);
}

start();