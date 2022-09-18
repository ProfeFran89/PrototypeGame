var MenuStart = pc.createScript('menuStart');

// initialize code called once per entity
MenuStart.prototype.initialize = function() {
    
};

// update code called every frame
MenuStart.prototype.update = function(dt) {

    //Find the screens
    var screenOne = this.app.root.findByName('mainScreen');
    var screenTwo = this.app.root.findByName('contextScreen');

    //On click in button, close up the main screen and open context
    this.entity.button.on('click', function(event) {
        screenOne.enabled = false;
        screenTwo.enabled = true;
    });

};