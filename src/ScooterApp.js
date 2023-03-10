const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // stations and registeredUser don't have to be arguments in the constructor - 
  // when creating a new ScooterApp object, it starts with default values for these
  constructor(stations, registeredUser) {
    this.stations = 
    {
      'one': [],
      'two': [],
      'three': []
    }
    this.registeredUser = {}
  }

  registerUser(username, password, age) {
    if(!(username in this.registeredUser) && age >= 18) {
      this.registeredUser[username] = new User(username, password, age)
      console.log('User has been registered')
    } else if (username in this.registeredUser) {
      throw new Error('already registered')
    } else {
      throw new Error('too young to register')
    }
    // make sure to return the created user at the end of the method
  }

  loginUser(username, password) {
    // instead of checking password equality here,
    // we can remove it since we are already calling the User class's login method
    // which does this for us already
    if (username in this.registeredUser && password === this.registeredUser[username].password) {
      console.log('user has been logged in') 
      // this does not need to be in a return - we can just perform the login method
      return this.registeredUser[username].login(password)
    } else {
      throw new Error('username or password is incorrect')
    }
  }

  logOutUser(username) {
    // we can also throw an error if user is not logged in to begin with
    if (username in this.registeredUser) {
      console.log('user is logged out')
      this.registeredUser[username].logout()
    } else {
      throw new Error('no such user is logged in')
    }
  }

  createScooter(station) {
    if (station in this.stations) {
      // make sure to include the arguments needed to create the Scooter object
      let newScooter = new Scooter()
      this.stations[station].push(newScooter)
      console.log('created new scooter')
      newScooter.station = station
      return newScooter
    } else {
      throw new Error('no such station')
    }
  }

  dockScooter(scooter, station) {
    if (!(station in this.stations)) throw new Error('no such station')
    // instead of checking if indexOf is -1,
    // we can see if this.stations[station] includes scooter
    if (this.stations[station].indexOf(scooter) === -1) {
      this.stations[station].push(scooter)
      scooter.dock(station)
      console.log('scooter is docked')
    } else {
      throw new Error('scooter already at station')
    }
  }

  rentScooter(scooter, user) {
    // let's also check if the scooter's station exists

    // instead of iterating through all stations,
    // we know the scooter.station attribute exists - 
    // once we verify that the scooter's station is real and not null,
    // we can check the this.stations[scooter.station] array to see if the 
    // scooter is there to rent
    for (let key in this.stations) {
      if (this.stations[key].includes(scooter)) {
        let index = this.stations[key].indexOf(scooter)
        this.stations[key].splice(index, 1)
        // we can call the rent() method here
        scooter.user = user
        console.log('scooter is rented')
        break;
      }
    }
    console.log('scooter already rented')
  }

  print() {
    console.log(this.registeredUser)
    for (let key in this.stations) {
      console.log('stations', key)
      console.log('number of scooters', this.stations[key].length)
 
    }
  }
}

// make sure to remove unused or commented-out code
// let scooter = new ScooterApp()

// scooter.print()

module.exports = ScooterApp

