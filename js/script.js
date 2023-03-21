const button = document.querySelector("button");
const repairList = document.querySelector(".need-repair");



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

bike.needsRepair = true;
skateboard.needsRepair = true;
// console.log(skateboard.needsRepair);
// console.log(bike.needsRepair);

button.addEventListener("click", function(){
    repairList.innerHTML = "";
    const vehicleRepairList = myVehicles.filter(vehicle => {
        return vehicle.needsRepair === true;
    });
    
    for(let repairListLoop in vehicleRepairList){
        let li = document.createElement("li");
        li.innerHTML = `my <span> ${repairListLoop.type} needs some ❤`;
        repairList.append(li);
    }

});

