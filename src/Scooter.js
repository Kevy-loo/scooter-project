class Scooter {
  // we also don't really need most of these arguments either - 
  // the Scooter has a bunch of default values for the initial user,
  // initial charge, and whether it's broken or not
  constructor(station, user, serial, nextSerial, charge, isBroken) {
    this.station = station;
    this.user = user;
    this.serial = serial;
    // instead of defining this as an argument sent to the constructor,
    // nextSerial could be a static variable on the class 
    // (e.g. static nextSerial = 1) - then this.serial can be set
    // as nextSerial is incremented for each new Scooter object
    this.nextSerial = nextSerial;
    this.charge = charge;
    this.isBroken = isBroken;
  }

  // be careful here - username is not the same as a User object.
  // the rent method takes in a User object, rather than a username string
  rent(username) {
    if (this.charge > 20 && !this.isBroken) {
      this.station = null;
      this.user = username;
    } else if (this.charge < 20) {
      throw new Error("scooter needs to charge");
    } else if (this.isBroken) {
      throw new Error("scooter needs repair");
    }
  }

  dock(station) {
    this.station = station;
    this.user = null;
  }

  // love this asynchronous implementation of recharge and repair
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
