//window.onload = function() {

//Hole counter variable.
var numHole = 1;


//Array for 18 holes.
var holeArray = new Array(18);

/**
 * this is the constructor for the hole objects. 
 * it is my first go at it and has all the values of a par 5.
 * The objects will be constructed in a loop function
 * and referenced by there index.
 * @param {*} holeNumber 
 * @param {*} par 
 * @param {*} shotType1 
 * @param {*} shotType2 
 * @param {*} greenReg 
 * @param {*} fairway1 
 * @param {*} fairway2 
 * @param {*} recovery 
 * @param {*} puts 
 */
var Hole = function hole(holeNumber, par, shotType1, shotType2, greenReg, fairway1, fairway2, recovery, putts) {
    this.holeNumber = holeNumber;
    this.par = par;
    this.shotType1 = shotType1;
    this.greenReg = greenReg;
    this.fairway1 = fairway1;
    this.fairway2 = fairway2;
    this.shotType2 = shotType2;
    this.recovery = recovery;
    this.putts = putts;
    };


/*
 * Displays the current hole in a span tag on the html page.
 */
function displayCurrentHole() {
    document.getElementById("currentHole").innerHTML = numHole;
}

//displays hole 1 when page first loads
displayCurrentHole();

//} //end of onload function.

/**
 * displays the hole on the page in a span tag.
 */
function displayCurrentHole() {
    document.getElementById("currentHole").innerHTML = numHole;
}


/**
 * changes the hole number
 * when next hole is clicked.
 */
function newHole() {
    numHole += 1;
    displayCurrentHole();
}

/**
 * Loops through the holeArray and 
 * constructs a hole object into each index.
 * you can reference them by index only because 
 * they have no name.
 */
function createHoleObjects() {
    for(i = 0; i < holeArray.length; i++){
        holeArray[i] = new Hole(i+1, 0, "", "", 0, 0, 0, 0, 0);
    }
}
//fires create hole objects and fills the array.
createHoleObjects();




//////////////////////////////////////////////Creating events for buttons that will give the objects values.
function parEvent() {
    var parButtons = document.getElementById("parWrapper").children;
    for( i = 0; i < parButtons.length; i++) {
        parButtons[i].addEventListener("click", function() {
            holeArray[numHole-1].par = this.value;
        })
    }
}
parEvent();

function fairwayEvent1() {
    var fairwayButtons1 = document.getElementById("fairwayWrapper1").getElementsByTagName("button");
    for( i = 0; i < fairwayButtons1.length; i++) {
        fairwayButtons1[i].addEventListener("click", function() {
            holeArray[numHole-1].fairway1 = parseInt(this.value);
        })
    }
}
fairwayEvent1();
/**
 * if fairway = 1 this funciton should be used 
 */
function shotType1FairwayYes() {
    var shotType1FairwayYes = document.getElementById("shotType1FairwayYes").children;
    for( i = 0; i < shotType1FairwayYes.length; i++) {
        shotType1FairwayYes[i].addEventListener("click", function() {
            holeArray[numHole-1].shotType1 = parseInt(this.value);
        })
    }
}
shotType1FairwayYes();

function shotType1FairwayNo() {
    var shotType1FairwayNo = document.getElementById("shotType1FairwayNo").children;
    for( i = 0; i < shotType1FairwayNo.length; i++) {
        shotType1FairwayNo[i].addEventListener("click", function() {
            holeArray[numHole-1].shotType1 = this.value;
        })
    }
}
shotType1FairwayNo();

function greenRegEvent() {
    var greenReg = document.getElementById("greenInReg").children;
    for( i = 0; i < greenReg.length; i++) {
        greenReg[i].addEventListener("click", function() {
            holeArray[numHole-1].greenReg = parseInt(this.value);
        })
    }
}
greenRegEvent();

function scrambleShots() {
    var scrambleShots = document.getElementById("scrambleToGreen").children;
    for( i = 0; i < scrambleShots.length; i++) {
        scrambleShots[i].addEventListener("click", function() {
            holeArray[numHole-1].recovery = parseInt(this.value);
        })
    }
}
scrambleShots();
/**
 * this function loops through the putt buttons and stores there value
 * into the putt property of a hole object as an int .
 * the object affected depends on the numHole variable -1.
 */
function puttEvent() {
    var puttButtons = document.getElementById("puttWrapper").children;
    for( i = 0; i < puttButtons.length; i++) {
        puttButtons[i].addEventListener("click", function() {
            holeArray[numHole-1].putts=parseInt(this.value);
        })
    }
}
puttEvent();





/////////////////////////////////////////////End of events.