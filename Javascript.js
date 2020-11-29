// Variabler
var copper = 0
var silver = 0
var gold = 0

var attack = 1
var upgrades = 0

var cost1 = 20

//Attack button
var button = document.getElementById("mainButton");
button.onclick = function() {
    copper = copper + attack
    console.log(copper)
    return copper
}

//Upgrade buttons
var uButton = document.getElementById("u1Button");
uButton.onclick = function() {
    if (copper >= cost1 || (silver >= cost1-100 && cost1-100 <= 0) || (gold >= cost1-10000 && cost1-10000 <= 0)) {
        copper = copper - cost1
        cost1 = cost1 + 10
        upgrades = upgrades + 1
    }
return [copper, cost1, upgrades]
}

//Click for money function
function makeMoney() {
    copper = copper + upgrades
    console.log(copper)
    return copper
}

//Hold styr på penge function
function manageMoney() {
    while(copper >= 100) {
    copper = copper - 100
    silver = silver + 1
}
    while(silver >= 100) {
    silver = silver - 100
    gold = gold + 1
}
    while(copper < 0) {
        copper = copper + 100
        silver = silver - 1
}
    while(silver < 0) {
        silver = silver + 100
        gold = gold - 1
}
    return [copper, silver, gold]
}

//Ingame clocks
setInterval(makeMoney, 1000)
setInterval(manageMoney, 10)