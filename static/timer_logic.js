

class Timer {
    constructor(focusMinutes, breakMinutes){
        this.focusMinutes = focusMinutes; 
        this.breakMinutes = breakMinutes; 

        this.mode = "focus"; 
        this.timeLeft = this.focusMinutes * 60; 
        this.timer = null; 
        this.isRunning = false; 

    }
    tick(){
        if (this.timeLeft > 0){
            this.timeLeft--; 
        }else{
            if (this.timeLeft == 0){
                this.mode = "focus"; 
                this.mode = "break";
                this.timeLeft = this.breakMinutes * 60; 

            }else{
                this.mode = "focus"; 
                this.timeLeft = this.focusMinutes * 60; 
            }
        }
    }

    startTimer(){
        if (this.isRunning) return; 
        this.isRunning = true; 
        this.timer - setInterval(() => {
            this.tick();   
        }, 1000); 
    }

    pauseTimer(){
        clearInterval(this.timer); 
        this.timer = null; 
        this.isRunning = false; 
    }

    resetTimer(){
        this.pauseTimer(); 
        this.mode = "focus"; 
        this.timeLeft = this.focusMinutes * 60; 
    }

    applySettings(focusMinutes, breakMinutes){
        if (this.isRunning) return; 

        this.focusMinutes = focusMinutes; 
        this.breakMinutes = breakMinutes; 
        this.resetTimer(); 
    }
}

if (typeof module !== "undefined"){
    module.exports = { Timer}; 
}