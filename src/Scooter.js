class Scooter {
  // scooter code here
  constructor(station, user, serial, nextSerial, charge, isBroken) {
    this.station = station;
    this.user = user;
    this.serial = serial;
    this.nextSerial = nextSerial;
    this.charge = charge;
    this.isBroken = isBroken;
  }
  rent(username) {
    if (this.charge > 20 && this.isBroken === false) {
      this.station = null;
      this.user = username;
    } else if (this.charge < 20) {
      throw new Error("scooter needs to charge");
    } else if (this.isBroken === true) {
      throw new Error("scooter needs repair");
    }
  }

  dock(station) {
    this.station = station;
    this.user = null;
  }
  async recharge() {
    console.log("Starting charge");

    return new Promise((resolve) =>  {
      let blank = setInterval(async => {
        if (this.charge >= 100) {
          this.charge = 100
          console.log("Charge complete");
          resolve()
          clearInterval(blank)
        } else {
          this.charge += 10;
          console.log(`battery is ${this.charge}`);
        }
      }, 1000)
  });

    
  }

  async requestRepair() {
    await new Promise((resolve) => setTimeout(resolve, 5000)); 

    this.isBroken = false;
    console.log("repair completed");
  }
}

module.exports = Scooter;
