const { test } = require("node:test"); 
const assert = require("node:assert/strict"); 
const {describe, it, beforeEach} = require('node:test'); 

const {Timer, pomoThon, customPomo, draugeimPomo, classicPomo, burstPomo} = require("../static/timer_logic.js")


describe("customPomo", () => {
    const validCases = [
        [25,5], //classic
        [15, 3], //burst
        [52, 17], //draugeim
        [90, 25],//pomoThon



    ]; 

    const invalidCases =[
        [-4, 5], 
        [20, 25],
    ]; 

    for (const [focusMinutes, breakMinutes] of validCases) {
        it(`accepts ${focusMinutes} focus and ${breakMinutes} break minutes`, () => {
            const timer = new customPomo(focusMinutes, breakMinutes);

            assert.equal(timer.focusMinutes, focusMinutes);
            assert.equal(timer.breakMinutes, breakMinutes);
        });
    }


});