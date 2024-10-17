class Car {
    constructor(name, speed) {
      this.name = name;
      this.position = 0;
      this.speed = speed; 
    }
  
    updatePosition() {
      this.position += this.speed; 
    }
  }
  
  const cars = [
    new Car("Car A", 120),
    new Car("Car B", 130),
    new Car("Car C", 125)
  ];
  
  const raceDistance = 1000; 
  
  function simulateRace(cars, raceDistance) {
    let winner = null;
  
    while (!winner) {
      for (let car of cars) {
        car.updatePosition(); 
        
        if (car.position >= raceDistance) {
          winner = car.name;
          break;
        }
      }
    }
  
    console.log(`El ganador es: ${winner}`);
  }
  
  simulateRace(cars, raceDistance);
  