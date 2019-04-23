const VehicleFactory = require('./VehicleFactory')
const factory = new VehicleFactory();
const bike = factory.createVehicle({
  type: 'BIKE', doors: 2, color: 'gold', state: 'Brand New'
});
const truck= factory.createVehicle({
  type: 'TRUCK', doors: 6, color: 'white', state: 'used'
});

console.log(bike); 
console.log(truck); 