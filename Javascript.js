// Variabler
var copper = 0
var silver = 0
var gold = 1

var attack = 1
var upgrades = 0

var a1cost = 50
var a2cost = 500
var a3cost = 5000

var cost1 = 20
var cost2 = 200
var cost3 = 2000
var cost4 = 20000
var cost5 = 200000

//Attack button
var button = document.getElementById("mainButton");
button.onclick = function() {
    copper = copper + attack
    return copper
}

//Upgrade buttons
var au1Button = document.getElementById("au1Button");
au1Button.onclick = function() {
    if (copper >= a1cost || silver*100 >= a1cost || gold*10000 >= a1cost) {
        copper = copper - a1cost
        a1cost = a1cost + 10
        attack = attack + 1
    }  
return [copper, a1cost, attack]
}

var au2Button = document.getElementById("au2Button");
au2Button.onclick = function() {
    if (copper >= a2cost || silver*100 >= a2cost || gold*10000 >= a2cost) {
        copper = copper - a2cost
        a2cost = a2cost + 100
        attack = attack + 10
    }  
return [copper, a2cost, attack]
}

var au3Button = document.getElementById("au3Button");
au3Button.onclick = function() {
    if (copper >= a3cost || silver*100 >= a3cost || gold*10000 >= a3cost) {
        copper = copper - a3cost
        a3cost = a3cost + 1000
        attack = attack + 100
    }  
return [copper, a3cost, attack]
}

var u1Button = document.getElementById("u1Button");
u1Button.onclick = function() {
    if (copper >= cost1 || silver*100 >= cost1 || gold*10000 >= cost1) {
        copper = copper - cost1
        cost1 = cost1 + 5
        upgrades = upgrades + 1
    }  
return [copper, cost1, upgrades]
}

var u2Button = document.getElementById("u2Button");
u2Button.onclick = function() {
    if (copper >= cost2 || silver*100 >= cost2 || gold*10000 >= cost2) {
        copper = copper - cost2
        cost2 = cost2 + 50
        upgrades = upgrades + 10
    }  
return [copper, cost2, upgrades]
}

var u3Button = document.getElementById("u3Button");
u3Button.onclick = function() {
    if (copper >= cost3 || silver*100 >= cost3 || gold*10000 >= cost3) {
        copper = copper - cost3
        cost3 = cost3 + 500
        upgrades = upgrades + 100
    }  
return [copper, cost3, upgrades]
}

var u4Button = document.getElementById("u4Button");
u4Button.onclick = function() {
    if (copper >= cost4 || silver*100 >= cost4 || gold*10000 >= cost4) {
        copper = copper - cost4
        cost4 = cost4 + 5000
        upgrades = upgrades + 1000
    }  
return [copper, cost4, upgrades]
}

var u5Button = document.getElementById("u5Button");
u5Button.onclick = function() {
    if (copper >= cost5 || silver*100 >= cost5 || gold*10000 >= cost5) {
        copper = copper - cost5
        cost5 = cost5 + 50000
        upgrades = upgrades + 10000
    }  
return [copper, cost5, upgrades]
}

//Generate money function
function makeMoney() {
    copper = copper + upgrades
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

//Show Money funktioner
function showMoney() {
    document.getElementById('coppercount').value = copper;
    document.getElementById('silvercount').value = silver;
    document.getElementById('goldcount').value = gold;
    document.getElementById('au1price').value = a1cost;
    document.getElementById('au2price').value = a2cost;
    document.getElementById('au3price').value = a3cost;
    document.getElementById('u1price').value = cost1;
    document.getElementById('u2price').value = cost2;
    document.getElementById('u3price').value = cost3;
    document.getElementById('u4price').value = cost4;
    document.getElementById('u5price').value = cost5;
}

//Ingame clocks
setInterval(makeMoney, 1000)
setInterval(manageMoney, 10)
setInterval(showMoney, 10)