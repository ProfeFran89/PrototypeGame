var JobsSelector = pc.createScript('jobsSelector');
var lvlJob = 99999;

// initialize code called once per entity
JobsSelector.prototype.initialize = function() {
    //mouse event
    this.entity.element.on('mousedown', this.onPress, this);
};

// update code called every frame
JobsSelector.prototype.update = function(dt) {
    //this.availableJobs(lvlPlayer);
};

JobsSelector.prototype.onPress = function(event){
    //save name in var and search gameMenu
    var name = event.element.entity.name;

    //switch by button selection
    if (this.accessJob(name)){
        this.getJob(name);
        this.closeWindows();
    }
};

//close and open screens
JobsSelector.prototype.closeWindows = function(){
    this.app.root.findByName('gameMenu').enabled = true;
    this.app.root.findByName('jobsMenu').enabled = false;
    this.app.root.findByName('tapSector').enabled = true;
};

//method for GET jobs INFO
JobsSelector.prototype.getJob = function(job){
    if(job == 'panfleto_btn'){
        this.app.root.findByName('table').script.gameScript.setJob('POSTER');
        this.app.root.findByName('machine').script.addText.setLetters(100);
    }
    if(job == 'triptico_btn'){
        this.app.root.findByName('table').script.gameScript.setJob('TRIPTICO');
        this.app.root.findByName('machine').script.addText.setLetters(200);
    }
};

//access to jobs
JobsSelector.prototype.accessJob = function(job){
    switch (job) {
        case 'panfleto_btn': lvlJob = 0; break;
        case 'triptico_btn': lvlJob = 1; break;
        default: lvlJob = 99999;
    }

    var lvlPlayer = this.app.root.findByName('table').script.gameScript.getLevel();
    if (lvlPlayer >= lvlJob){
        return true;
    } else {
        console.log('Falta experiencia');
        return false;
    }
};

//Available jobs
JobsSelector.prototype.availableJobs = function(lvlPlayer){
    if (lvlPlayer >= lvlJob){
        this.app.root.findByName(job).button.active = true;
    } else {
        this.app.root.findByName(job).button.active = false;
        this.app.root.findByName(job).button.inactiveTint(FFFFFF7A);
    }
};