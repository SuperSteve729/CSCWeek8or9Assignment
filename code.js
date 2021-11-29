function playCraps() {
    console.log("playCraps() is running!");
    var die1 = Math.ceil(Math.random() * 6); //Selects random num 0-1 multiplied by 6 for die 1
    var die2 = Math.ceil(Math.random() * 6); //Selects random num 0-1 multiplied by 6 for die 2
    var sum = die1 + die2 //Add up dice
    
    document.getElementById("die1").innerHTML = "Die 1 = " + die1;
    document.getElementById("die2").innerHTML = "Die 2 = " + die2;
    document.getElementById("sum").innerHTML = "Sum of dice: " + sum;
    if (sum == 7 || sum == 11) {
        document.getElementById("crapsResults").innerHTML = "CRAPS - you lose";
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsResults").innerHTML = "DOUBLES - you win";
    }
    else {
        document.getElementById("crapsResults").innerHTML = "NOTHING - you drawed, please try again";
    }
}

function blastOff() {
    var currTime = 50;
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 5000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 10000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 15000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 20000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 25000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 30000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 35000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 40000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 45000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = "Blastoff!";
    }, 50000);
}

function betterBlastOff() {
    console.log("betterBlastOff() has started");
    var currTime = 50; //Amount of time
    var halfTime = currTime / 2; //Halfway point of time
    document.getElementById("countDownTimer").style.fontSize = "xx-large";
    for(var i = 0; i < 51; i++) {
        setTimeout(function(){
            if (currTime == 0) {
                //debugger;
                document.getElementById("countDownTimer").innerHTML = "Blast off!"; 
                //Last timeout, gets set to this instead of just saying 0
            } else if (currTime < halfTime) {
                //debugger;
                document.getElementById("countDownTimer").innerHTML = "Warning, timer is less than halfway! Time left: " + currTime; 
                //Sets last timeouts to this if under the halfway point
            } else {
                //debugger;
                document.getElementById("countDownTimer").innerHTML = currTime; 
                //Every other timeout function, just shows the number
            }
            currTime -= 1; //Subtracts it by timer incrementation for when appearing on the screen, should be by 5
        }, 1000 * i);
    }
}

function start() {
    console.log("start() is running");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop() {
    console.log("stop() is running");
    clearInterval(timer);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function updateDisplay() {
    theTime = new Date;
    var timeRead = data[index].time_seconds;

    if (timeRead >= 10) {
        document.getElementById("data").rows["seconds"].innerHTML = dataRow("Time Elapsed", data[index].time_seconds, "seconds");
        document.getElementById("data").rows["latitude"].innerHTML = dataRow("Latitude", data[index].latitude, " ");
        document.getElementById("data").rows["longitude"].innerHTML = dataRow("Latitude", data[index].longitude, " ");
        document.getElementById("data").rows["gps_altitude"].innerHTML = dataRow("GPS Altitude", data[index].gps_altitude, " ");
        document.getElementById("data").rows["bmpSensor_altitude"].innerHTML = dataRow("BMP Sensor Altitude", data[index].bmpSensor_altitude, " ");
        document.getElementById("data").rows["bmpSensor_pressure"].innerHTML = dataRow("BMP Sensor Pressure", data[index].bmpSensor_pressure, " ");
        document.getElementById("data").rows["bmpSensor_temp"].innerHTML = dataRow("BMP Sensor Temperature", data[index].bmpSensor_temp, " ");
        document.getElementById("data").rows["digSensor_temp"].innerHTML = dataRow("Digital Sensor Temperature", data[index].digSensor_temp, " ");
        document.getElementById("data").rows["cssSensor_temp"].innerHTML = dataRow("CSS Sensor Temperature", data[index].cssSensor_temp, " ");
        document.getElementById("data").rows["cssSensor_eCO2"].innerHTML = dataRow("CSS Sensor eCO2", data[index].cssSensor_eCO2, " ");
        document.getElementById("data").rows["cssSensor_TVOC"].innerHTML = dataRow("CSS Sensor TVOC", data[index].cssSensor_TVOC, " ");
        document.getElementById("data").rows["uv"].innerHTML = dataRow("UV", data[index].uv, " ");
        document.getElementById("data").rows["accelX"].innerHTML = dataRow("Acceleration X", data[index].accelX, " ");
        document.getElementById("data").rows["accelY"].innerHTML = dataRow("Acceleration Y", data[index].accelY, " ");
        document.getElementById("data").rows["accelZ"].innerHTML = dataRow("Acceleration Z", data[index].accelZ, " ");
        document.getElementById("data").rows["magnetX"].innerHTML = dataRow("Magnetic X", data[index].magnetX, " ");
        document.getElementById("data").rows["magnetY"].innerHTML = dataRow("Magnetic Y", data[index].magnetY, " ");
        document.getElementById("data").rows["magnetZ"].innerHTML = dataRow("Magnetic Z", data[index].magnetZ, " ");
        document.getElementById("data").rows["gyroX"].innerHTML = dataRow("Gyro X", data[index].gyroX, " ");
        document.getElementById("data").rows["gyroY"].innerHTML = dataRow("Gyro Y", data[index].gyroY, " ");
        document.getElementById("data").rows["gyroZ"].innerHTML = dataRow("Gyro Z", data[index].gyroZ, " ");
        document.getElementById("clockTime").innerHTML = "Display Time: " + theTime.getHours() + ":" 
            + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":"
            + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds())

        if (index < 500) {
            index++;
        } else {
            index = 0;
        }
    }
}


function getData() {
    var loadedData = loadData();
    return loadedData;
}

function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

function playStation() {
    console.log("playStation() is running!");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

function sound(srcFile) {
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    //this.sound.setAttribute("preload", "audio");
    //this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    //document.body.append(this.sound);
    this.play = function(){
        this.sound.play();
    } 
    this.stop = function(){
        this.sound.pause();
    }
} 

class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        uv,
        accelX,
        accelY,
        accelZ,
        magnetX,
        magnetY,
        magnetZ,
        gyroX,
        gyroY,
        gyroZ
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.uv = uv;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magnetX = magnetX;
        this.magnetY = magnetY;
        this.magnetZ = magnetZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}