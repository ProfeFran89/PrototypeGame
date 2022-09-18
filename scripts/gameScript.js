var GameScript = pc.createScript('gameScript');
var level = 0;
var exp = 0;
var abcTotal = 0;
var abcShow = 0;
var job = '';
var money = 0;
var textActive = 1;

//var textPasive = 1;

// initialize code called once per entity
GameScript.prototype.initialize = function() {

};

// update code called every frame
GameScript.prototype.update = function(dt) {
    //Update "global variables"
    this.app.root.findByName('level_txt').element.text = 'Level: '+level+' EXP: '+exp+' ABC: '+abcShow+'/'+(abcTotal+abcShow);
    this.app.root.findByName('job_txt').element.text = 'Actual job: '+job;
    this.app.root.findByName('level_txt1').element.text = 'Level: '+level+' EXP: '+exp+' ABC: '+abcShow+'/'+(abcTotal+abcShow);
    this.app.root.findByName('job_txt1').element.text = 'Actual job: '+job;
    this.app.root.findByName('wallet_txt').element.text = '$'+money;
    this.app.root.findByName('money_txt').element.text = 'Money: $'+money;

    //Active button triptico (modify the method thinking in json or data base)
    if (exp >= 20){
        level = 1;
    }
    if (level == 1){
        this.app.root.findByName('triptico_btn').button.active = true;
    }
};

//Setter
GameScript.prototype.setJob = function(newJob) {
    job = newJob;
};
GameScript.prototype.setExp = function(newExp) {
    exp = exp+newExp;
};
GameScript.prototype.upLevel = function() {
    level = level+1;
};
GameScript.prototype.setAbcShow = function(newAbc) {
    abcShow = newAbc;
};
GameScript.prototype.setAbcTotal = function(newAbc) {
    abcTotal = abcTotal + newAbc;
};
GameScript.prototype.setMoney = function(newMoney) {
    money = money+newMoney;
};
GameScript.prototype.setTextActive = function(newText) {
    textActive = textActive+newText;
};

//Getter
GameScript.prototype.getMoney = function() {
    return money;
};
GameScript.prototype.getExp = function() {
    return exp;
};
GameScript.prototype.getLevel = function() {
    return level;
};

//Finish job
GameScript.prototype.finishPoster = function(lettersText){
    this.app.root.findByName('table').script.gameScript.setExp(10);
    this.app.root.findByName('table').script.gameScript.setMoney(80);
    this.app.root.findByName('table').script.gameScript.setJob('');
    this.app.root.findByName('table').script.gameScript.setAbcTotal(lettersText);
    this.app.root.findByName('table').script.gameScript.setAbcShow(0);
    this.app.root.findByName('machine').script.addText.reset();
};