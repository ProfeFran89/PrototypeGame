var TapButton = pc.createScript('tapButton');

// initialize code called once per entity
TapButton.prototype.initialize = function() {
   
};

// update code called every frame
TapButton.prototype.update = function(dt) {
};

TapButton.prototype.onMouseDown = function(event){
    //method for one clic
    if (event.button == pc.MOUSEBUTTON_LEFT) {
        var machine = this.app.root.findByName('machine');
        machine.script.addText.addText();
    }
};