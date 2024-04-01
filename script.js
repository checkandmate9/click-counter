let clickCount = 0;
let seconds = 0;
const duration = 5;
let timerStarted = false;


const timeInterval = setInterval(() => {
  if(timerStarted){
  seconds++;
if(seconds>=duration){
  clearInterval(timeInterval);
  console.log("süre doldu");
  console.log("Toplam tıklama sayısı:" + clickCount);

  const result = {
    tıklamaSayısı: clickCount
  };
  let modalMessage = "";
  let modalMessage2= ``;
  openModal();
  if(clickCount >= 1 && clickCount <=2){
     document.getElementById("turtleimg").style.display = "block";
     modalMessage = "You are a turtle, get your lazy ass up!!";
     modalMessage2 = `You have clicked ${clickCount} times  in ${duration} second!!`;
  }
  else if (clickCount >= 3 && clickCount <=4){
    document.getElementById("rabbitimg").style.display = "block";
    modalMessage = "You are a rabbit, looks like you've got some finger there! ";
    modalMessage2 = `You have clicked ${clickCount} times in ${duration} second!!`;
  }
  else if (clickCount >= 5 &&  clickCount <= 6){
    document.getElementById("monkeyimg").style.display = "block";
    modalMessage = "You are a monkey, perhaps? do monkeys have fast fingers??";
    modalMessage2 = `You have clicked ${clickCount} times in ${duration} second!!`;
  }
  else{
    document.getElementById("cheetahimg").style.display = "block";
    modalMessage = "You are a cheetah, your lover must love you very bad!! ;)";
    modalMessage2 = `You have clicked ${clickCount} times in ${duration} second!!`;
  }
  document.getElementById("modalMessage").textContent = modalMessage;
  document.getElementById("modalMessage2").textContent = modalMessage2;
}
}
},1000);

document.getElementById("myButton").onclick = function(){
  clickCount++
  if(!timerStarted){
    timerStarted = true;
  }
};

const restartButton = document.getElementById("restartButton");

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

restartButton.addEventListener('click', function(){
  location.reload();

  myButton.style.display = "block";
  restartButton.style.display = "none";
});
