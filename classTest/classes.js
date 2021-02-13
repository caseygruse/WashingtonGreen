window.onload = function() {

//Hole counter variable.
var numHole = 1;

/**
 * this is the constructor for the hole objects. 
 * it is my first go at it and has all the values of a par 5.
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
var Hole = function hole(holeNumber, par, shotType, shotType2, greenReg, fairway, fairway2, recovery, puts) {
    this.holeNumber = holeNumber;
    this.par = par;
    this.shotType = shotType;
    this.greenReg = greenReg;
    this.fairway = fairway;
    this.fairway2 = fairway2;
    this.shotType2 = shotType2;
    this.recovery = recovery;
    this.puts = puts;
    };

// hole objects.  values will be changed with button clicks
var hole1 = new Hole(1, 0, "", "", false, false, false, 0, 0);
var hole2 = new Hole(1, 0, "", "", false, false, false, 0, 0);
var hole3 = new Hole(1, 0, "", "", false, false, false, 0, 0);
var hole4 = new Hole(1, 0, "", "", false, false, false, 0, 0);
var hole5 = new Hole(1, 0, "", "", false, false, false, 0, 0);
var hole6 = new Hole(1, 0, "", "", false, false, false, 0, 0);
var hole7 = new Hole(1, 0, "", "", false, false, false, 0, 0);
var hole8 = new Hole(1, 0, "", "", false, false, false, 0, 0);
var hole9 = new Hole(1, 0, "", "", false, false, false, 0, 0);
var hole10 = new Hole(1, 0, "", "", false, false, false, 0, 0);
var hole11 = new Hole(1, 0, "", "", false, false, false, 0, 0);
var hole12 = new Hole(1, 0, "", "", false, false, false, 0, 0);
var hole13 = new Hole(1, 0, "", "", false, false, false, 0, 0);
var hole14 = new Hole(1, 0, "", "", false, false, false, 0, 0);
var hole15 = new Hole(1, 0, "", "", false, false, false, 0, 0);
var hole16 = new Hole(1, 0, "", "", false, false, false, 0, 0);
var hole17 = new Hole(1, 0, "", "", false, false, false, 0, 0);
var hole18 = new Hole(1, 0, "", "", false, false, false, 0, 0);

//Array for 18 holes.
var holeArray = new Array(18);

/*
 * Displays the current hole in a span tag on the html page.
 */
function displayCurrentHole() {
    document.getElementById("currentHole").innerHTML = numHole;
}

//displays hole 1 when page first loads
displayCurrentHole();

} //end of onload function.

function displayCurrentHole() {
    document.getElementById("currentHole").innerHTML = numHole;
}


/**
 * changes the hole number
 */
function newHole(){
    numHole += 1;
    displayCurrentHole();
}


var numHole = 1;
