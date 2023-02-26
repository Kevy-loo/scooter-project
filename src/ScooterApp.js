const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
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
  }

  loginUser(username, password) {
    if (username in this.registeredUser && password === this.registeredUser[username].password) {
      console.log('user has been logged in') 
      return this.registeredUser[username].login(password)
    } else {
      throw new Error('username or password is incorrect')
    }
  }
  logOutUser(username) {
    if (username in this.registeredUser) {
      console.log('user is logged out')
      this.registeredUser[username].logout()
    } else {
      throw new Error('no such user is logged in')
    }
  }
  createScooter(station) {
    if (station in this.stations) {
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
    if (this.stations[station].indexOf(scooter) === -1) {
      this.stations[station].push(scooter)
      scooter.dock(station)
      console.log('scooter is docked')
    } else {
      throw new Error('scooter already at station')
    }
  }
  rentScooter(scooter, user) {
    for (let key in this.stations) {
      if (this.stations[key].includes(scooter)) {
        let index = this.stations[key].indexOf(scooter)
        this.stations[key].splice(index, 1)
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

// let scooter = new ScooterApp()

// scooter.print()

module.exports = ScooterApp

