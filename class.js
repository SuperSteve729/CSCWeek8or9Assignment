class Propulsion {
    constructor (
        speed,
        power, 
        burnTime
    ){
        this.speed = speed;
        this.power = power;
        this.burnTime = burnTime;
    }
    //list methods
    launch() {
        alert("Spacecraft lifting off!");
        return true;
    }

    landing() {
        alert("Spacecraft landing!")
        return true;
    }

    loadFuel(fuelType, fuelAmount) {
        alert("Loading spacecraft with " + fuelAmount + " gallons of " + fuelType);
        return true;
    }
}

class Mission {
    //properties
    constructor (
        fuelLvl,
        oxyLvl,
        foodLvl,
        spaceCraftName,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        numOfAstronauts
    ) {
        this.fuelLvl = fuelLvl;
        this.oxyLvl = oxyLvl;
        this.foodLvl = foodLvl;
        this.spaceCraftName = spaceCraftName;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.numOfAstronauts = numOfAstronauts;
    }

    launch() {
        alert("We are taking off!");
    }

    disMissionLaunchDate() {
        alert("This mission launches on " + this.launchDateMonth + " " + this.launchDateDay + ", " + this.launchDateYear + ".");
    }
}

function launchFall() {
    console.log("launchFall() is running!");
    fallLaunch.launch();
}

function displayFall() {
    console.log("displayFall() is running!");
    fallLaunch.disMissionLaunchDate();
}

