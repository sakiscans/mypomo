

//this is the actual debugged logic, just add buttons + timer variants
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
        } 
        
        if (this.timeLeft == 0){
                if (this.mode == "focus"){
                    this.mode = "break"; 
                    this.timeLeft = this.breakMinutes * 60; 
                } else{
                    this.mode = "focus"; 
                    this.timeLeft = this.focusMinutes * 60; 
            }
        }
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
        this.timer = null; 
        this.isRunning = false; 
    }

    resetTimer(){
        this.pauseTimer(); 
        this.mode = "focus"; 
        this.timeLeft = this.focusMinutes * 60; 
    }

    applySettings(focusMinutes, breakMinutes){
        if (this.isRunning) return "Cannot change timer settings while running"; 
        else{
            this.focusMinutes = focusMinutes; 
            this.breakMinutes = breakMinutes; 
            this.resetTimer(); 
        }
    }
}

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

class draugeimPomo extends Timer{
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
    constructor(focusMinutes, breakMinutes){
        super(focusMinutes, breakMinutes); 
    }
}
if (typeof module !== "undefined"){
    module.exports = {Timer, 
                    classicPomo, 
                    burstPomo, 
                    draugeimPomo, 
                    pomoThon, 
                    customPomo}; 
}