var i = 0;
var machineStatus = 0;
var stopGame;
var numMachines = 0;
var factStatus = 0;
var numFact = 0;

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
  machineStatus = 0;
  numMachines = 0;
  numFact = 0;
  factStatus = 0;
  document.numAutoMiners.numAutoMiners.value = 0;
  start();
}

function buyMachine(){
  if(document.count.display.value>=50){
    document.count.display.value = document.count.display.value - 50;
    console.log(i);
    numMachines++
    machineStatus=numMachines;
    numAutoMiners();
    machineStat();
  }else {
    alert("Insufficient Funds");
  }
}

setInterval(function(){
  if(machineStatus >= 1 && stopGame == false){
    let stored = Number(document.count.display.value)
    document.count.display.value = "";
    console.log(typeof stored);
    document.count.display.value = (stored + (machineStatus * 1));
  }
  machineStat();
}, 1000)

setInterval(function(){
  let cpsOverTen = 0;
  cpsOverTen = i/5;
  i = 0;
  document.stats.statsDisplay.value = cpsOverTen;
}, 5000)

function machineStat(){
  console.log(machineStatus)
  if(machineStatus >= 1){
    let numOfMachines = machineStatus
    return machineStatus
  }
}
function start(){
  document.stats.statsDisplay.value = 0;
  document.numAutoMiners.numAutoMiners.value = 0;
  document.numAutoFactories.numAutoFactories.value = 0;
}

function numAutoMiners(){
  document.numAutoMiners.numAutoMiners.value = numMachines;
}

function numAutoFactories(){
  document.numAutoFactories.numAutoFactories.value = numFact;
}

function buyFactory(){
  if(document.count.display.value >= 1000){
    document.count.display.value = document.count.display.value - 1000;
    numFact++
    console.log(numFact);
    numAutoFactories();
  }else{
    alert("Invalid Funds!");
  }
}
setInterval(function(){
  if(numFact >= 1 && stopGame == false){
    machineStatus = machineStatus + numFact;
    document.numAutoMiners.numAutoMiners.value = machineStatus;
  }
}, 2021)
