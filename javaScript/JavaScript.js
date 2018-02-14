//new hole counter
var numHole = 1;

//The Array for the users guess of what shot he will have.
var projected = new Array(18);

//The Array for the users Actual shots
var actualShots = new Array(18);

// vaiable for shot type which will go into the array of projected (the projected shot of the user).   it change values based on the click of the shots
var shotType = "";

// variable for the shot that actualy happened
var realShotType ="";


displayCurrentHole();
//Displays the hole number on the html page
function displayCurrentHole() {
    document.getElementById("currentHole").innerHTML = numHole;
}

// function to grab elements by ID
function getElementByID(element){
    document.getElementById(element);
}

// These are the shotType functions that will change shotType using the onclicks.
function changeShotTypeSlice(){
    shotType = "Slice"
    
}

function changeShotTypeDraw(){
    shotType = "Draw"
    
}

function changeShotTypeHook(){
    shotType = "Hook"
    
}

function changeShotTypeFade(){
    shotType = "Fade" 
}

function changeShotTypeStraight(){
    shotType = "Straight" 
}

function changeShotTypeWiff(){
    shotType = "Wiff"   
}


//New hole counter function
function newHole(){
    projectedShots();
    actualShotsFunction();
    numHole +=1; 
    if (numHole >= 19){
        alert(projected);
        alert(actualShots);
    }   
    
    
    displayCurrentHole();  
}


//This funciton stores the projected shots data into the numHole index.
function projectedShots(){
    projected[numHole-1] = shotType;
    
}


    
/////////////THESE ARE THE FUNCTIONS ARE FOR WHAT SHOT ACTUALY HAPPENED

function changeShotTypeSlice2(){
    realShotType = "Slice"
    
}

function changeShotTypeDraw2(){
    realShotType ="Draw"
    
}

function changeShotTypeHook2(){
    realShotType ="Hook"
    
}

function changeShotTypeFade2(){
    realShotType = "Fade" 
}

function changeShotTypeStraight2(){
    realShotType = "Straight" 
}

function changeShotTypeWiff2(){
    realShotType = "Wiff"   
}

function actualShotsFunction(){
    actualShots[numHole-1] = realShotType;

}

  



