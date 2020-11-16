var copper = 0
var silver = 0
var gold = 0

while(copper >=100) {
    copper = copper - 100
    silver = silver + 1
}

while(silver >= 100) {
    silver = silver - 100
    gold = gold + 1
}

var attack = 1
var upgrades = 0

var button1 = document.getElementById("mainButton");

button1.onclick = function() {
    copper = copper + attack + upgrades
    console.log(copper)
    return copper
    
}