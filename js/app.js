// Enemies our player must avoid
var Enemy = function(y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // x pos
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


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';

    // x pos
    this.x = 200;
    this.y = 400;
};

Player.prototype.update = function(dt) {
};

Player.prototype.render = function() {
 ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(dt) {
};

// Player class
    // constructor

    // properties
        // x pos
        // y pos
        // Sprite image
    // methods
        // update Position
            // check collisions
                // player collided?
            // Game won?
                // player reach final tile?
        // Render
            // Draw player on current coordinates
        // handle input
            // Update player's x and y property        


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies = [];
const bug1 = new Enemy(60, 200);
const bug2 = new Enemy(150, 100);
const bug3 = new Enemy(230, 130);
const bug4 = new Enemy(150, 150);

allEnemies.push(bug1, bug2, bug3, bug4);

// Place the player object in a variable called player
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
