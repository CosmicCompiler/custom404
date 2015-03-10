
var game = new Phaser.Game('99', '99', Phaser.CANVAS, '404', { preload: preload, create: create });

function preload() {

    game.load.atlas('goofed', 'assets/scold.png', 'assets/scold.json');
   
}

var goofed;

function create() {

    bot = game.add.sprite(game.world.centerX, game.world.centerY, 'goofed');

    bot.animations.add('run');
    bot.animations.play('run', 10, true);

    var style = { font: '40px Arial', fill: '#ffffff', align: 'center' };
    var text = game.add.text(360, 575, "GOOD JOB! \nYou've gone and broke it all.\nI'm afraid I'll have to let you go.", style);
    text.anchor.set(0.5);
    text.alpha = 0.1;

    game.add.tween(text).to( { alpha:1 }, 10000, "Linear", true);

}
