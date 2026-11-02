const { test } = require("node:test"); 
const assert = require("node:assert/strict"); 
const {Timer} = require("../static/timer_logic.js")

test("starts in focus mode with guest duration", () => {
    const timer = new Timer(25, 5); 

    assert.equal(timer.mode, "focus"); 
    assert.equal(timer.timeLeft, 25 * 60); 
    assert.equal(timer.isRunning, false); 

}); 

test("starts in focus mode for alternative duration", () => {
    const timer = new Timer(30, 10); 
    assert.equal(timer.mode, "focus");
    assert.equal(timer.timeLeft, 30 * 60);
});


test("tick decreases by one second", () => {
    const timer = new Timer(25, 5); 
    timer.timeLeft = 2; 
    timer.tick()
    assert.equal(timer.timeLeft, 1); 

}); 

test("tick timeleft == 0 switches to break modde", () =>{
    const timer = new Timer(25, 5); 
    timer.timeLeft = 0; 
    timer.tick(); 
    assert.equal(timer.mode, "break"); 

}); 

test("tick timeleft stays focused on focus mode.", () => {
    const timer = new Timer(25,5); 
    timer.mode = "focus"; 
    timer.tick(); 
    assert.equal(timer.mode, "focus"); 

}); 

test("setinterval starts timer", (t) => {
    const timer = new Timer(25, 5); 
    t.after(() => timer.pauseTimer()); 
    timer.startTimer();
    assert.equal(timer.isRunning, true); 
    assert.notEqual(timer.timer, null); 
}); 

test("pausetimer pauses timer", () => {
    const timer = new Timer(25,5); 
    timer.startTimer(); 
    timer.pauseTimer(); 
    assert.equal(timer.isRunning, false); 
    assert.equal(timer.timer, null); 
}); 

test("reset timer rests to focusmode", () => {
    const timer = new Timer(25,5); 
    timer.startTimer(); 
    timer.resetTimer(); 

    assert.equal(timer.mode, "focus"); 
    assert.equal(timer.timeLeft, 25 *60); 
}); 

test("applysettings changes focus and break minutes", () => {
    const timer = new Timer(25,5); 
    timer.applySettings(30, 10); 
    assert.equal(timer.focusMinutes, 30); 
    assert.equal(timer.breakMinutes, 10); 
}); 

test("applysettings maintains setting while running", () => {
    const timer = new Timer(25, 5); 
    timer.startTimer(); 
    timer.pauseTimer(); 
    timer.applySettings(30, 10); 
    assert.equal(timer.focusMinutes, 30); 
    assert.equal(timer.breakMinutes, 10); 
}); 

//test("applysettings does not change while running", () => {
 //   const timer = new Timer(25, 5); 
 //   timer.startTimer(); 
 //   timer.applySettings(30, 10); 
//    assert.equal(timer.focusMinutes, 25); 
//    assert.equal(timer.breakMinutes, 5);
//});  run into a logical contradiction here will revisit. 