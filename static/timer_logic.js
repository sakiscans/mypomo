

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

    applySettings(focusMinutes, breakMinutes){ //i completely fuced this one up so we will revisit it. 
        if (this.isRunning) 
            {return "Cannot change timer settings while running";}

        customPomo.helperCustom(focusMinutes, breakMinutes); 
        super.applySettings(focusMinutes, breakMinutes); 
            
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
        customPomo.helperCustom(focusMinutes, breakMinutes); 
        
    }

static helperCustom(focusMinutes, breakMinutes){
    const rules = [
        {valid: focusMinutes >= 1, customMessage: "Focus minutes must be at least 1."}, 
        {valid: breakMinutes >= 1, customMessage: "Break minutes must be at least 1."}, 
        {valid: breakMinutes <= focusMinutes/2, customMessage: "Error"},
        {valid: breakMinutes < focusMinutes, customMessage: "Break minutes cannot be greater than focus minutes."}
    ]; 

    for (const rule of rules){
        if (!rule.valid) throw new Error(rule.customMessage); 
        }
    }
    getPresetName() {
        const presets = [
            {focus: 25, break: 5, name: "classicPomo"},
            {focus: 15, break: 3, name: "burstPomo"}, 
            {focus: 52, break: 17, name: "draugeimPomo"}, 
            {focus: 90, break: 25, name: "pomoThon"}, 
        ];

       const match = presets.find(preset => preset.focus === this.focusMinutes && 
        preset.break === this.breakMinutes);
        return match ? match.name : null;

        }
} 

if (typeof module !== "undefined"){
    module.exports = {Timer, 
                    classicPomo, 
                    burstPomo, 
                    draugeimPomo, 
                    pomoThon, 
                    customPomo,}; 
}