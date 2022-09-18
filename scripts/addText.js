var AddText = pc.createScript('addText');
var contador = 0; //resetear al terminar el texto
var lettersText = 0;
var cadena = '';
var tap = 1;

// initialize code called once per entity
AddText.prototype.initialize = function() {

};

// update code called every frame
AddText.prototype.update = function(dt) {
    //contador se muestra en el tablero de informaciones por lo que no debe ser mayor que el tap necesario.
    if (contador > lettersText){
        contador = lettersText;
    }
    if (contador == lettersText && contador != 0){
        this.app.root.findByName('tapSector').enabled = false;
        this.app.root.findByName('table').script.gameScript.finishPoster(lettersText);
    }
};

AddText.prototype.addText = function(){
    cadena = 'sdaskjdas aisfoais lasjdlaks jdla ksjd asldjasldas lkasjdaksjd oajdkasnd aoiwnanfjkaasd akasdkas das';
    //método aparte Setters
    //Crear textBox en papel --> agregar objeto papel
    //this.app.root.findByName('textBox').element.text = this.app.root.findByName('textBox').element.text + cadena.charAt(contador);
    contador = contador + (1*tap);
    this.app.root.findByName('table').script.gameScript.setAbcShow(contador);
};

//Setters
AddText.prototype.setLetters = function(newLetters){
    lettersText = newLetters;
};
AddText.prototype.setCadena = function(newCadena){
    cadena = newCadena;
};
AddText.prototype.setTap = function(newTap){
    tap = newTap;
};
AddText.prototype.reset = function(){
    cadena = '';
    lettersText = 0;
    contador = 0;
};