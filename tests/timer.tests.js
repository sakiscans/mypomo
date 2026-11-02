const { test } = require("node:test"); 
const assert = require("node:assert/strict"); 
const {Timer} = require("../static/timer_logic.js")

test("starts in focus mode with guest duration", () => {
    const timer = new Timer(25, 5); 

    assert.equal(timer.mode, "focus"); 
    assert.equal(timer.timeLeft, 25 * 60); 
    assert.equal(timer.isRunning, false); 

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

})