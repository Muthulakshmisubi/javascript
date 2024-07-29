// A function to create cars

var buildCar;
var getCarInfo;
var car1;
var car2;

buildCar = function (make, model, year, color, mileage) {
    return {
        make: make,
        model: model,
        year: year,
        color: color,
        mileage: mileage
    };
};

getCarInfo = function (car) {
    return car.year + " " + car.make + " " + car.model + " (" + car.color + "), " + car.mileage + " miles";
};

car1 = buildCar("Toyota", "Corolla", 2015, "Silver", 50000);
car2 = buildCar("Ford", "Mustang", 2018, "Red", 20000);

console.log(getCarInfo(car1));
console.log(getCarInfo(car2));