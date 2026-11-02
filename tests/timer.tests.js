const { test } = require("node:test"); 
const assert = require("node:assert/strict"); 
const {Timer} = require(".../static/timer.js")

test("starts in focus mode with guest duration", () => {
    const timer = new Timer(25, 5); 

    assert.equal(timer.mode, "focus"); 
    assert.equal(timer.timeLeft, 25 * 60); 
    assert.equal(timer.isRunning, false); 

}); 