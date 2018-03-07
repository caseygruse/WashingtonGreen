# Washington Green

Golf and Disc golf web application. (score keeping, maps, schedules, events)

## Getting Started

Go to the Projects link above > then go to the Pseucode project. From there you'll be able to see open issues ( we can treat them like tickets or 'to-do'.

Please view the flowcharts in the WGDiagram folder (you'll need a copy of Visio for the editable version), or just look at the snippet pictures in the same folder or below.

![alt text](https://github.com/KodaRayTominus/WashingtonGreen/blob/master/WGDiagrams/WGDiagramSnippet1.PNG)
![alt text](https://github.com/KodaRayTominus/WashingtonGreen/blob/master/WGDiagrams/WGDiagramSnippet2.PNG)
![alt text](https://github.com/KodaRayTominus/WashingtonGreen/blob/master/WGDiagrams/WGDiagramSnippet3.PNG)

Naming Conventions: 

  lowerCamelCase = (i.e. "numHole" + "realShotType" + "displayCurrentHole")

Java Coding Style:

```
//COMMENTS
function displayCurrentHole() {
    document.getElementById("currentHole").innerHTML = numHole;
}

//COMMENTS
function getElementByID(element) {
    document.getElementById(element);
}

//New hole counter function
function newHole() {
    projectedShots();
    actualShotsFunction();
    numHole +=1; 
    if (numHole >= 19) {
        alert(projected);
        alert(actualShots);
    }   
    displayCurrentHole();  
}
```

### Goals

A step by step series of examples that tell you have to get a development env running

Frontend:

```
1) Webpage

2) Canvas

3) Logo

4) Name
```

Backend:

```
1) Server

2) Database
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Casey Gruse** - *Initial work* - [caseygruse](https://github.com/caseygruse)
* **Koda Tominus** - *Initial work* - [KodaRayTominus](https://github.com/KodaRayTominus)
* **Anthony McCann** - *Initial work* - [AnMcCbusiness](https://github.com/AnMcCbusiness)

See also the list of [contributors](https://github.com/KodaRayTominus/WashingtonGreen/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
