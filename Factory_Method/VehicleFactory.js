class Truck{
  constructor(options) {
    this.tyre = options.tyre  || 4;
    this.state = options.state || 'brand new';
    this.color = options.color || 'Red';
  }
}
class Bike {
  constructor(options) {
    this.tyre = options.tyre || 2;
    this.state = options.state || 'used';
    this.color = options.color || 'black';
  }
}
class VehicleFactory {
  createVehicle(options) {
    if(options.type === 'BIKE') {
      return new Bike(options);
    } else if(options.type === 'TRUCK') {
      return new Truck(options);
      }
  }
}
module.exports = VehicleFactory