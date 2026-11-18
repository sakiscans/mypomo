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
        [800, 10], //extreme just checking logic. hopefully nobody does this. 
        [2, 1], //minimum break
        [20, 10], // break is extactly half of focus
    ]; 

    const invalidCases =[
        [-4, 5], //negative int focus + break larger than fouus. 
        [20, 25], //break larger than focus
        [0, 1], // zero focus
        [25, 0], //zero break 
        [21, -1], //negative brea 
        [20, 11], // break over half of focus. 
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
            assert.throws(() => {
                new customPomo(focusMinutes, breakMinutes); 
            }, Error); 
        
        });
    }

} );