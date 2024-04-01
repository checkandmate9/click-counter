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
  openModal();
  if(clickCount >= 1 && clickCount <=20){
    modalMessage = "Turtle";
  }
  else if (clickCount >= 21 && clickCount <=40){
    modalMessage = "Rabbit";
  }
  else if (clickCount >= 41 &&  clickCount <= 58){
    modalMessage = "Monkey";
  }
  else{
    modalMessage = "Cheetah";
  }
  document.getElementById("modalMessage").textContent = modalMessage;
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





//const condition = false;