var lenContainer = document.getElementById('lengthConverter')
var lenInSelect = document.getElementById('selectLengthInput')
var lenInText = document.getElementById('lengthInput')
var lenOutSelect = document.getElementById('selectLengthOutput')
var lenOutText = document.getElementById('lengthOutput')
// Length Conver Dunction 
function convertLength(){
    if(lenInSelect.value == 'MM'){
        if(lenOutSelect.value == 'MM'){
            lenOutText.value = lenInText.value;
        }
    }
}