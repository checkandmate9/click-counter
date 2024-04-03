let clickCount = 0;
let seconds = 0;
const duration = 5;
let timerStarted = false;
let milliseconds = 0;
let intervalID; 
let cps;

function startCalculatingCPS() {
  intervalID = setInterval(calculateCPS, 1000);
}

function calculateCPS() {
  if (seconds >= 5) {
    clearInterval(intervalID);
  } else {
    if (timerStarted) {
      cps = clickCount / 5;
      console.log(cps);
    }
  }
}

startCalculatingCPS();


function santisaniye(){
  if(timerStarted){
  milliseconds++;
  document.getElementById("milliseconds").innerHTML = milliseconds
  
  if(milliseconds == 100){
    milliseconds = 0; 
  }
  if(seconds >= 5){  
     document.getElementById("milliseconds").innerHTML = ": 00"
  }
 }
}
setInterval(santisaniye,10); 

const timeInterval = setInterval(() => {
  if(timerStarted){
  seconds++;
  document.getElementById("seconds").innerHTML = seconds
if(seconds>=duration){
  clearInterval(timeInterval);
  
  const result = {
    tıklamaSayısı: clickCount
  };
  let modalMessage = "";
  let modalMessage2 = ``;
  let modalMessage3 = ``;
  openModal();
  if(clickCount >= 1 && clickCount <=20){
     document.getElementById("turtleimg").style.display = "block";
     modalMessage = "You are a turtle, get your lazy ass up!!";
     modalMessage2 = `You have clicked ${clickCount} times in ${duration} second!!`;
     modalMessage3 = `Your CPS(click per second) is ${cps}`
  }
  else if (clickCount >= 21 && clickCount <=40){
    document.getElementById("rabbitimg").style.display = "block";
    modalMessage = "You are a rabbit, looks like you've got some finger there! ";
    modalMessage2 = `You have clicked ${clickCount} times in ${duration} second!!`;
    modalMessage3 = `Your CPS(click per second) is ${cps}`
  }
  else if (clickCount >= 41 &&  clickCount <= 57){
    document.getElementById("monkeyimg").style.display = "block";
    modalMessage = "You are a monkey, perhaps? do monkeys have fast fingers??";
    modalMessage2 = `You have clicked ${clickCount} times in ${duration} second!!`;
    modalMessage3 = `Your CPS(click per second) is ${cps}`
  }
  else{
    document.getElementById("cheetahimg").style.display = "block";
    modalMessage = "You are a cheetah, your lover must love you very bad!! ;)";
    modalMessage2 = `You have clicked ${clickCount} times in ${duration} second!!`;
    modalMessage3 = `Your CPS(click per second) is ${cps}`
  }
  document.getElementById("modalMessage").textContent = modalMessage;
  document.getElementById("modalMessage2").textContent = modalMessage2;
  document.getElementById("modalMessage3").textContent = modalMessage3;
}
}
},1000);

document.getElementById("myButton").onclick = function(){
  clickCount++
  document.getElementById("clickCount").innerHTML = clickCount
  if(!timerStarted){
    timerStarted = true;
  }
};


const restartButton = document.getElementById("restartButton");

restartButton.addEventListener('click', function(){
  location.reload();

  myButton.style.display = "block";
  restartButton.style.display = "none";
});

function openModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = "block";
}

document.querySelectorAll('.close').forEach(item => {
  item.addEventListener('click', event => {
    const modal = event.target.closest('.modal');
    modal.style.display = "none";
    
    restartButton.style.display = "block";
    myButton.style.display = "none";
  })
});


