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

describe("preset_ variants", () => {
    const presets = [
        [classicPomo, 25, 5], 
        [burstPomo, 15, 3], 
        [draugeimPomo, 52, 17], 
        [pomoThon, 90, 25], 
    ];

    for (const[Variant, focusMinutes, breakMinutes] of presets){
        it(`${Variant.name} has the correct settings`, () => {
            const timer = new Variant(); 

            assert.equal(timer.focusMinutes, focusMinutes); 


        });
    }
}
); 

describe("customPomo preset matching", () => {
    const cases = [
        [25, 5, "classicPomo"], 
        [15, 3, "burstPomo"], 
        [52, 17, "draugeimPomo"], 
        [90, 25, "pomoThon"], 
        [20, 10, "customPomo"], 
        [800, 10, "customPomo"],
    ]; 
    for (const [focusMinutes, breakMinutes, expectedVariant] of cases){
        it(`matches ${focusMinutes} focus and ${breakMinutes} break to ${expectedVariant}`, () => {
            const timer = new customPomo(focusMinutes, breakMinutes); 
        }); 
    } 

    it("updates match when appropriate settings change", () => {
        const timer = new customPomo(25, 5); 
        timer.applySettings(15, 3); 
        assert.equal(timer.getPresetName(), "burstPomo"); 

    }); 

}); 