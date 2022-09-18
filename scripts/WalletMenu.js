var WalletMenu = pc.createScript('walletMenu');

// initialize code called once per entity
WalletMenu.prototype.initialize = function() {

};

// update code called every frame
WalletMenu.prototype.update = function(dt) {
    var game = this.app.root.findByName('gameMenu');
    var wallet = this.app.root.findByName('walletMenu');
    var tap = this.app.root.findByName('tapSector');
    //On click in button, close up the screen and open another one
    this.entity.button.on('click', function(event) {
        game.enabled = false;
        wallet.enabled = true;
        tap.enabled = false;
    });
};