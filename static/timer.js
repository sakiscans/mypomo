let timer; 
let focusMinutes = 25; 
let timeLeft = focusMinutes * 60; 
let isRunning = false; 
let mode = "focus"; //either focus or break, is the main idea here. 
//basic globals 



//make it compatible with html 
const timerDisplay = document.getElementById('timer'); 
const startButton = document.getElementById('start'); 
const pauseButton = document.getElementById('pause'); 
const resetButton = document.getElementById('reset'); 

const focusSelect = document.getElementById('focus-select'); //generally each go hand in hand. 
const breakSelect = document.getElementById('break-select');
const ApplySettingsButton = document.getElementById('apply-settings'); 

function updateDisplay(){
    const minutes = Math.floor(timeLeft / 60); 
    const seconds = timeLeft % 60; 
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

class Timer{
    timer(type){
        timer.type = type; 
    }

    startTimer(){
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
                alert("Timer has concluded. break time!")
    
            }
            }, 1000); 
    
        }
        pauseTimer(){
            clearInterval(timer); 
            isRunning = false; 
        }
        
        resetTimer(){
            clearInterval(timer); 
            isRunning = false; 
            timeLeft = 25 * 60; 
            updateDisplay(); 
        }

    

}


function applySettings(){
    if (isRunning){
    alert("Cannot change timer settings while running."); 
    }

    focusMinutes = Number(focusSelect.value); 
    breakMinutes = Number(breakSelect.value); 

    mode = "focus"; 
    timeLeft = focusMinutes * 60; 
    updateDisplay(); 
}


updateDisplay(); 