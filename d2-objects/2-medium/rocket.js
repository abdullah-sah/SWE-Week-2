/*
Create an object with the name rocket with the following:
  Properties:
    fuel: 200
    fuelCostToA: 20
    fuelCostToB: 30
    fuelCostToC: 35
  Methods:    all three methods are similar.  It checks whether the rocket has enough fuel to travel round trip.
              If it does, it will subtract this amount from the fuel and return true
              If it does not, it will do nothing but return false.
    flyToA()
    flyToB()
    flyToC()
*/

let rocket = {
  fuel: 200,
  fuelCostToA: 20,
  fuelCostToB: 30,
  fuelCostToC: 35,
  flyToA() {
    if (this.fuel >= 20) {
      this.fuel -= 20;
      return true;
    } else return false;
  },
  flyToB() {
    if (this.fuel >= 30) {
      this.fuel -= 30;
      return true;
    } else return false;
  },
  flyToC() {
    if (this.fuel >= 35) {
      this.fuel -= 35;
      return true;
    } else return false;
  }
};

//Test command (in terminal) "npm run test:d2:medium:rocket"
module.exports = { rocket };
