var PowerSelector = pc.createScript('powerSelector');

// initialize code called once per entity
PowerSelector.prototype.initialize = function() {
    //mouse event
    this.entity.element.on('mousedown', this.onPress, this);
};

// update code called every frame
PowerSelector.prototype.update = function(dt) {
    
};

PowerSelector.prototype.onPress = function(event){
    //save name in var and search gameMenu
    var name = event.element.entity.name;

    //switch by button selection
    if (name == 'capuccino_btn') {
        if (this.buyPower(50)){
            //this.app.root.findByName('machine').script.addText.setTap(2); --> tap pasivo
            console.log('Compraste capuccino, sin efecto aún');
            this.closeWindows();
        }else{
            console.log('Falta dinero');
        }
    }
    if (name == 'bothHands_btn') {
        if (this.buyPower(70)){
            this.app.root.findByName('machine').script.addText.setTap(2);
            console.log('Ahora escribes con ambas manos, TAPx2');
            this.closeWindows();
        }else{
            console.log('Falta dinero');
        }
    }
};

PowerSelector.prototype.closeWindows = function(){
    //close and open screens
    this.app.root.findByName('gameMenu').enabled = true;
    this.app.root.findByName('walletMenu').enabled = false;
    this.app.root.findByName('tapSector').enabled = true;
};

PowerSelector.prototype.buyPower = function(cost){
    //valor wallet
    var money = this.app.root.findByName('table').script.gameScript.getMoney();
    
    if (money > cost){
        this.app.root.findByName('table').script.gameScript.setMoney(-cost);
        return true;
    } else {
        return false;
    }
};