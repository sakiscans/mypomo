let timer; 

let focusMinutes = 25; 
let breakMinutes = 5; 

let focustimeLeft = focusMinutes * 60; 
let breaktimeLeft = breakMinutes * 60; 

let isRunning = false; 
let mode = "focus"; //default as focus. 
//globals. i feel like this might be the ugliest thing ever. 


//make it compatible with html 
const timerDisplay = document.getElementById('timer'); 
const startButton = document.getElementById('start'); 
const pauseButton = document.getElementById('pause'); 
const resetButton = document.getElementById('reset'); 


const focusSelect = document.getElementById('focus-select'); 
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
    timer(focusTime, breakTime){
        this.focusTime = focusMinutes; 
        this.breakTime = breakMinutes; 
        //should also initialize the focus minutes and stuff 
    }//revise this. 

    startTimer(){
        if (isRunning) return; 
         
        isRunning = true; 
        timer = setInterval(() => {
            if (focustimeLeft > 0 && mode == "focus"){
                focustimeLeft--; 
                updateDisplay(); 
            }
            else{
                clearInterval(timer); 
                isRunning = false; 
                mode == "break"
            }
            }, 1000); 
        }
        
    breakTimer(){
        if (mode == "break"){
            if (breaktimeLeft > 0){
                breaktimeLeft--; 
                updateDisplay(); 
            }
            else{
                clearInterval(timer); 
                isRunning = false; 
                mode == "focus"; 
             }
            updateDisplay(); 
            }
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


    applySettings(){
        if (isRunning){
        alert("Cannot change timer settings while running."); 
        }

        focusMinutes = Number(focusSelect.value); 
        breakMinutes = Number(breakSelect.value); 

        mode = "focus"; 
        timeLeft = focusMinutes * 60; 
        updateDisplay(); 
    } 
}//end bracket for class timer. 

class classicPomo extends Timer{
    constructor(){
        super(); 
        focusMinutes = 25; 
        breakMinutes = 5; 
    }
}

class burstPomo extends Timer{
    constructor(){
        super(); 
        focusMinutes = 15; 
        breakMinutes = 3; 
    }
}

class DraugeimPomo extends Timer{
    constructor(){
        super(); 
        focusMinutes = 52; 
        breakMinutes = 17; 
    }
}

class pomoThon extends Timer{
    constructor(){
        super(); 
        focusMinutes = 90; 
        breakMinutes = 25; 
    }
}

class customPomo extends Timer{
    constructor(){
        super(); 
        focusMinuntes = null; 
        breakMinutes = null; 
    }

    assignFocusMinutes(focusMinutes){
        this.focusMinutes = focusMinutes; 
    }
    assignBreakMinutes(breakMinutes){
        this.breakMinutes = breakMinutes; 
    }
}

updateDisplay(); //final one i suppose. 