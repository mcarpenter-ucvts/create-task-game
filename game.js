var i = 0;
var minerStatus = 0;
var stopGame;
var numMiner = 0;
var drillStatus = 0;
var numDrill = 0;

function countInsert(){
  document.count.display.value++
  stopGame = false;
  i++
}

function reset(){
  //Colleague Wrote Reset Function//
  countInsert();
  document.count.display.value = 0;
  i=0;
  stopGame = true;
  minerStatus = 0;
  numMiner = 0;
  numDrill = 0;
  drillStatus = 0;
  document.numAutoMiners.numAutoMiners.value = 0;
  start();
}

function buyMachine(){
  if(document.count.display.value>=50){
    document.count.display.value = document.count.display.value - 50;
    console.log(i);
    numMiner++
    machineStatus=numMachines;
    numAutoMiners();
    minerStat();
  }else {
    alert("Need more Diamonds!!");
  }
}

setInterval(function(){
  if(minerStatus >= 1 && stopGame == false){
    let stored = Number(document.count.display.value)
    document.count.display.value = "";
    console.log(typeof stored);
    document.count.display.value = (stored + (minerStatus * 1));
  }
  minerStat();
}, 1000)

setInterval(function(){
  let cpsOverTen = 0;
  cpsOverTen = i/5;
  i = 0;
  document.stats.statsDisplay.value = cpsOverTen;
}, 5000)

function machineStat(){
  console.log(minerStatus)
  if(minerStatus >= 1){
    let numOfMachines = minerStatus
    return minerStatus
  }
}
function start(){
  document.stats.statsDisplay.value = 0;
  document.numAutoMiners.numAutoMiners.value = 0;
  document.numAutoDrills.numAutoDrills.value = 0;
}

function numAutoMiners(){
  document.numAutoMiners.numAutoMiners.value = numMachines;
}

function numAutoDrills(){
  document.numAutoDrills.numAutoDrills.value = numAutoDrills;
}

function buyDiamondDrill(){
  if(document.count.display.value >= 1000){
    document.count.display.value = document.count.display.value - 1000;
    numDrill++
    console.log(numDrill);
    numAutoDrills();
  }else{
    alert("Need more Diamonds!!");
  }
}
setInterval(function(){
  if(numDrill >= 1 && stopGame == false){
    minerStatus = minerStatus + numDrill;
    document.numAutoMiners.numAutoMiners.value = minerStatus;
  }
}, 2021)
