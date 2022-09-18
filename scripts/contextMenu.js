var ContextMenu = pc.createScript('contextMenu');

// initialize code called once per entity
ContextMenu.prototype.initialize = function() {

};

// update code called every frame
ContextMenu.prototype.update = function(dt) {
    var context = this.app.root.findByName('contextScreen');
    var game = this.app.root.findByName('gameMenu');
    var tap = this.app.root.findByName('tapSector');

    //On click in button, close up the Main Screen
    this.entity.button.on('click', function(event) {
        context.enabled = false;
        game.enabled = true;
        tap.enabled = false;
    });
};
