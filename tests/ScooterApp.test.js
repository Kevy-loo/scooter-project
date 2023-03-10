const Scooter = require("../src/Scooter");
const User = require("../src/User");
const ScooterApp = require("../src/ScooterApp");

// similar comment in the Scooter test file - 
// adding error cases are really important to test all scenarios,
// regardless if successful or error scenarios
describe("testing scooter app", () => {
  const scootApp = new ScooterApp()
  // register user
  test("register a new user", () => {
    scootApp.registerUser("kevin", "password1", 23);
    expect(scootApp.registeredUser).toHaveProperty('kevin');
  });

  // log in
  test('should log in an existing user', () => {
      scootApp.registerUser('phil', 'password123', 22);
      scootApp.loginUser('phil', 'password123');
      expect(scootApp.registeredUser['phil'].loggedIn).toEqual(true);
  });

  // log out
  test('it should log out a logged in user', () => {
      scootApp.registerUser('kevin1', 'password123', 22);
      scootApp.loginUser('kevin1', 'password123');
      scootApp.logOutUser('kevin1');
      expect(scootApp.registeredUser['kevin1'].loggedIn).toBe(false);
  });

  // create scooter
  test('create a new scooter and add it to the station', () => {
      scootApp.createScooter("one");
      console.log(scootApp.stations)
      expect(scootApp.stations["one"][0]).toBeInstanceOf(Scooter);
      expect(scootApp.stations["one"]).toContain(scootApp.stations["one"][0]);
  });

  // rent scooter test missing 

  // dock scooter
  test('docking scooter', () => {
      // love this use of jest spying
      const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
      let scooter = new Scooter();
      scootApp.dockScooter(scooter, "two");
      let station = scootApp.stations["two"];
      expect(console.log).toHaveBeenCalledWith('scooter is docked');
      expect(station).toContain(scooter);

      // you can also check the scooter's properties
      // to make sure the user is null and scooter.station is the station
      spy.mockRestore();
  })
});
