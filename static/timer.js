let timer; 
let timeLeft = 20 * 60; 
let isRunning = false; 
//basic globals 



//make it compatible with html 
const timerDisplay = document.getElementById('timer'); 
const startButton = document.getElementById('start'); 
const pauseButton = document.getElementById('pause'); 
const resetButton = document.getElementById('reset'); 
//make it nicer
function updateDisplay(){
    const minutes = Math.floor(timeLeft / 60); 
    const seconds = timeLeft % 60; 
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
//basic functions for timer 

function startTimer(){
    if (isRunning) return; 
     
    isRunning = true; 
    timer = setInterval(() => {
        if (timeLeft > 0){
            timeLeft--; 
            updateDisplay(); 
        }
        else{
            clearInterval(timer); 
            isRunning = false; 
            alert("Timer has conclued. time for break.")

        }
        }, 1000); 

    }

function pauseTimer(){
    clearInterval(timer); 
    isRunning = false; 
}

function resetTimer(){
    clearInterval(timer); 
    isRunning = false; 
    timeLeft = 25 * 60; 
    updateDisplay(); 
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

updateDisplay(); 