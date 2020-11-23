var copper = 0
var silver = 0
var gold = 0

var attack = 1
var upgrades = 0

var upgradeA1 = false
var upgradeA2 = false

var button = document.getElementById("mainButton");
button.onclick = function() {
    copper = copper + attack
    console.log(copper)
    return copper
}

function makeMoney() {
    copper = copper + upgrades
    
    while(copper >= 100) {
    copper = copper - 100
    silver = silver + 1
}
    while(silver >= 100) {
    silver = silver - 100
    gold = gold + 1
}
    console.log(copper)
    return copper
    
}

setInterval(makeMoney, 1000)