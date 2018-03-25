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
 * @param {*} shotType 
 * @param {*} shotType2 
 * @param {*} greenReg 
 * @param {*} fairway 
 * @param {*} fairway2 
 * @param {*} recovery 
 * @param {*} puts 
 */
var Hole = function hole(holeNumber, par, shotType, shotType2, greenReg, fairway, fairway2, recovery, putts) {
    this.holeNumber = holeNumber;
    this.par = par;
    this.shotType = shotType;
    this.greenReg = greenReg;
    this.fairway = fairway;
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
    
}


/**
 * this function loops through the putt buttons and stores there value
 * into the putt property of a hole object as an int .
 * the object affected depends on the numHole variable -1.
 */
function puttEvent() {
    var puttButtons = document.getElementById("puttWrapper").children;
    for( i = 0; i < puttButtons.length; i++) {
        puttButtons[i].addEventListener("click", function(){
            holeArray[numHole-1].putts=parseInt(this.value);
        })
    }
}
puttEvent();


//function givePar() {
  //  holeArray[numHole].par = 
//}



/////////////////////////////////////////////End of events.