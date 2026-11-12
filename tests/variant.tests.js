const { test } = require("node:test"); 
const assert = require("node:assert/strict"); 
const {describe, it, beforeEach} = require('node:test'); 

const {Timer, pomoThon, customPomo, draugeimPomo, classicPomo, burstPomo, helperCustom} = require("../static/timer_logic.js")


describe("customPomo", () => {
    const validCases = [
        [25,5], //classic
        [15, 3], //burst
        [52, 17], //draugeim
        [90, 25],//pomoThon
        [800, 10] //extreme just checking logic. hopefully nobody does this. 
    ]; 

    const invalidCases =[
        [-4, 5], //negative int focus + break larger than fouus. 
        [20, 25], //break larger than focus
    ]; 

    for (const [focusMinutes, breakMinutes] of validCases) {
        it(`accepts ${focusMinutes} focus and ${breakMinutes} break minutes`, () => {
            const timer = new customPomo(focusMinutes, breakMinutes);

            assert.equal(timer.focusMinutes, focusMinutes);
            assert.equal(timer.breakMinutes, breakMinutes);
        });
    }

    for (const [focusMinutes,  breakMinutes] of invalidCases){
        it(`rejects ${focusMinutes} focus and ${breakMinutes} break minutes`, () => 
        {
            assert.throws(helperCustom(focusMinutes, breakMinutes), Error); 
        
        });
    }

} );