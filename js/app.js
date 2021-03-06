'use strict';

// Enemies our player must avoid
const Enemy = function(y, speed) {
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = -90;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //if in game area
    if (this.x < 500) {
        // increment x by speed * dt
        this.x += this.speed * dt;
    } else {
        this.x = -100;
    }  
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var Player = function() {
    this.sprite = 'images/char-cat-girl.png';
    this.startX = 200;
    this.startY = 400;
    this.x = this.startX;
    this.y = this.startY;
};

//updates the players position based on game state
Player.prototype.update = function(dt) {
    for(let enemy of allEnemies) {
        //check collisions
        if(enemy.y === this.y && (enemy.x + 75 > this.x && enemy.x < this.x + 75)){ 
            this.reset();
        }
    }
    // Game won 
    if(this.y ===  -15){
        this.reset();
        alert('Congrats you won!');
        console.log('game won');
    }

};

// Draws player on board
Player.prototype.render = function() {
 ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Handle keyboard input from the user
Player.prototype.handleInput = function(direction) {
    // column size is 101, row size is 83
    const gameBoundaries = {
        left: -2,
        up: -15,
        right: 402,
        down: 400
    }
    
    switch (direction) {
        case 'left':
            if(this.x > gameBoundaries['left']){
                this.x -=101;
            }
           break;       
        case 'up':
            if(this.y > gameBoundaries['up']){
                this.y -=83;
            }
            break;
        case 'right':
            if(this.x < gameBoundaries['right']){
                this.x += 101;
            }
            break;
        case 'down':
            if(this.y < gameBoundaries['down']){
                this.y += 83;
            }
            break; 
    }  
};

//resets player's position when collision or game won occurs
Player.prototype.reset = function() {
    this.x = this.startX;
    this.y = this.startY;
};

// Place all enemy objects in an array called allEnemies
const allEnemies = [
    new Enemy(68, 200),
    new Enemy(151, 100),
    new Enemy(234, 130),
    new Enemy(151, 150)
];

const player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
