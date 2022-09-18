var RayCast = pc.createScript('rayCast');

// initialize code called once per entity
RayCast.prototype.initialize = function() {
     this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.doRayCast, this);
};

// update code called every frame
RayCast.prototype.update = function(dt) {

};

RayCast.prototype.doRayCast = function(mouseEvent){
    var from = this.entity.getPosition();
    var to = this.entity.camera.screenToWorld(mouseEvent.x, mouseEvent.y, this.entity.camera.farClip);

    var result = this.app.systems.rigidbody.raycastFirst(from, to);

    //validation of sectorTap
    if (result){
        if (result.entity.name == 'tapSector'){
            this.app.root.findByName('tapSector').script.tapButton.onMouseDown(mouseEvent);
        }
    }
};