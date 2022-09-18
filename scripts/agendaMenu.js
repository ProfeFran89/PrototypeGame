var AgendaMenu = pc.createScript('agendaMenu');

// initialize code called once per entity
AgendaMenu.prototype.initialize = function() {

};

// update code called every frame
AgendaMenu.prototype.update = function(dt) {
    var game = this.app.root.findByName('gameMenu');
    var job = this.app.root.findByName('jobsMenu');
    var tap = this.app.root.findByName('tapSector');
    //On click in button, close up the screen and open another one
    this.entity.button.on('click', function(event) {
        game.enabled = false;
        job.enabled = true;
        tap.enabled = false;
    });

//Mejorar código, script de screen desde table(?)
};