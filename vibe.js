"use strict";


function match() {
    var controlVibe = ["adventurous", "ambitious", "compassionate"]
    var controlVision = ["entrepreneur", "successful", "travel"]
    
    var vibe = document.getElementById("vibe").value;
    var vision = document.getElementById("vision").value;
    vibe = vibe.split(',');
    vision = vision.split(',');
    
    vibe.sort()
    vision.sort()
    
    var numVibeMatch = 0;
    var numVisionMatch = 0;
    // For each descriptor x in vibe, search for x in controlVibe
    for (var i = 0; i < vibe.length; i++) {
        
        if (binarySearch(vibeControl, vibe[i]) != -1) {
            numVibeMatch += 1;
        }
    }
    var percentVibeMatch = 1.0*numVibeMatch/3;
    for (var i = 0; i < vision.length; i++) {
        if (binarySearch(visionControl, vision[i]) != -1) {
            numVisionMatch += 1;
        }
    }
    var percentVisionMatch = 1.0*numVisionMatch/3;
    var percentages = new Array(percentVibeMatch, percentVisionMatch);
    console.log("Percent match in vibe: " + percentVibeMatch);
    console.log("Percent match in vision: " + percentVisionMatch);
}

/** 
* Copyright 2009 Nicholas C. Zakas. All rights reserved.
* MIT-Licensed
* Uses a binary search algorithm to locate a value in the specified array. 
* @param {Array} items The array containing the item. 
* @param {variant} value The value to search for. 
* @return {int} The zero-based index of the value in the array or -1 if not found. 
*/
function binarySearch(items, value){
    var startIndex  = 0,
        stopIndex   = items.length - 1,
        middle      = Math.floor((stopIndex + startIndex)/2);
 
    while(items[middle] != value && startIndex < stopIndex){
 
        //adjust search area
        if (value < items[middle]){
            stopIndex = middle - 1;
        } else if (value > items[middle]){
            startIndex = middle + 1;
        }
 
        //recalculate middle
        middle = Math.floor((stopIndex + startIndex)/2);
    }
 
    //make sure it's the right value
    return (items[middle] != value) ? -1 : middle;
}
