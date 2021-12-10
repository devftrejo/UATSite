// This is how to comment in JavaScript.
// Fernando Trejo's Assignment "JS DOM and Doc Structure with Tables, Themes, and Mock Data".
// Use Class to create a class.
// A JS Class is not an object, but a template for JS Objects. When you have a class, you can use the class to create objects.
class InputData {
    // Always add a method named constructor(), it contains the initial properties of the class. It has the exact name constructor, is called/executed automatically when a new object is created, and used to initialize object properties.
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
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
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
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}
// Another JS Function.
function getData(){
    var loadedData = loadData();
    return loadedData;
}
// The @param tag provides the name, type, and description of a function parameter. The @param tag requires you to specify the name of the parameter you are documenting. You can also include the parameter's type, enclosed in curly brackets, and a description of the parameter.
/**
 * format the row to display data
 * @param {*} legend
 * @param {*} value
 * @param {*} units
 */
function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}
