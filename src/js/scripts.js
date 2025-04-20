
async function main() {

  class Engine {
    constructor(cylinders) {
      this.cylinders = cylinders;
      this.running = false;
    }
  }
  class Car {
    constructor(make, model, year, cylinders){
      this.make = make;
      this.model = model;
      this.year = year;
      this.odometer = 0;
      this.engine = new Engine(cylinders);
    }

    startEngine() {
      if (this.engine.running) {
        output('engine is already on');
        return;
      }

      this.engine.running = true;
      output('engine on');
    
      }

    
    stopEngine() {
      this.engine.running = false;
      output('engine off');
    }

    drive(distance) {
      if (this.engine.running) {
        this.odometer = this.odometer + distance;
        output(`you drove ${distance} km`);
      } else {
        output('cant drive, engine not on');
      }
    }
    }

    let myCar = new Car("mazda", "cx-5", 2020, 3);
    myCar.startEngine();
    myCar.drive(100);
    myCar.stopEngine();

    myCar.startEngine();
    myCar.drive(50);
    myCar.stopEngine();

    output(`odometer: ${myCar.odometer} km`)

    JSONCar = JSON.stringify(myCar);
    output(JSONCar);


 
}
