const createVehicle = function(type, numWheels, color){

    const vehicle = {
        type: type,
        numWheels: numWheels,
        color: color
    };
    return vehicle;
}

const car = createVehicle("car", 4, "violet");
const bike = createVehicle("bike", 2, "cranberry");
const skateboard = createVehicle("skateboard", 4, "orange");

const myVehicles = [car, bike, skateboard];

// console.log(bike.type);
// console.log(skateboard);
// console.log(car);

for(let wheels of myVehicles ){
    for(let key in wheels){
        console.log(key, wheels[key]);
    }
}