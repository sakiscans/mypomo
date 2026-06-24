
const timerDisplay = document.getElementById('timer'); 
const startButton = document.getElementById('start'); 
const pauseButton = document.getElementById('pause'); 
const resetButton = document.getElementById('reset'); 


const focusSelect = document.getElementById('focus-select'); 
const breakSelect = document.getElementById('break-select');
const ApplySettingsButton = document.getElementById('apply-settings'); 

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

class Timer{
    constructor(focusTime, breakTime){
        this.focusTime = focusTime; 
        this.breakTime = breakTime; 

        this.mode = "focus"; 
        this.timeLeft = this.focusMinutes * 60; 
        this.timer = null; 
        this.isRunning = false; 

        this.updateDisplay(); 
        //should also initialize the focus minutes and stuff 
    }//revise this. 

    updateDisplay(){
        const minutes = Math.floor(this.timeLeft / 60); 
        const seconds = this.timeLeft % 60; 

        timerDisplay.textContent = '${minutes.toString().padStart(2, "0")}:' + 
        '${seconds.toString().padStart(2, "0")}';
    }

    tick(){
        if (this.timeLeft > 0){
            this.timeLeft--; 
        } else{
            if (this.mode == "focus"){
                this.mode = "break"; 
                this.timeLeft = this.breakMinutes * 60; 

                alert("focus session complete! time 4 a break.");
            } else {
                this.mode = "focus"; 
                this.timeLeft = this.focusMinutes * 60; 
                alert("break session done.")
            }
        }
        this.updateDisplay(); 
    }

    startTimer(){
        if (this.isRunning) return; 
         
        this.isRunning = true; 
        this.timer = setInterval(() => {
            this.tick(); 
        }, 1000); 
    }


    pauseTimer(){
        clearInterval(this.timer); 
        this.isRunning = false; 
    }
        
    resetTimer(){
        clearInterval(this.timer); 
        this.isRunning = false; 
        this.timeLeft = 25 * 60; 
        this.updateDisplay(); 
    }


    applySettings(){
        if (this.isRunning){
        alert("Cannot change timer settings while running."); 
        }

        this.focusMinutes = focusMinutes; 
        this.breakMinutes = breakMinutes; 
        this.resetTimer();
    } 
}//end bracket for class timer. 

class classicPomo extends Timer{
    constructor(){
        super(25, 5); 
    }
}

class burstPomo extends Timer{
    constructor(){
        super(15, 3);

    }
}

class DraugeimPomo extends Timer{
    constructor(){
        super(52, 17); 
    }
}

class pomoThon extends Timer{
    constructor(){
        super(90, 25); 
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