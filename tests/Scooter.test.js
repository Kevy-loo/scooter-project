const Scooter = require("../src/Scooter");
// const User = require("../src/User");

//typeof scooter === object
describe("scooter object", () => {
  test("does something", () => {
    // edit this to be a real test!
    expect(typeof new Scooter()).toEqual("object");
  });

  // consider checking attributes of the Scooter object here
});

//Method tests
describe("scooter methods", () => {
  //rent method
  // for more test coverage, consider adding tests to cover error cases,
  // i.e. that an error is thrown if the scooter is broken
  // and that an error is thrown when it's not charged
  test("renting", () => {
    const newClass = new Scooter("something", "kevin", 423, 432, 24, false);

    expect(newClass.charge).toBeGreaterThan(20);
    expect(newClass.isBroken).toEqual(false);

    // we can also check the station and user properties to make sure
    // they are set correctly after scooter is rented
  });

  //dock method
  // when testing the dock method, make sure to include the invocation
  // of the method somewhere in the test, and then verify outputs or 
  // attribute changes after the dock() method is called
  test("docking", () => {
    const newClass = new Scooter(null, "kevin", 423, 432, 24, false);

    expect(newClass.station).toEqual(null);
    expect(newClass.user).toBe("kevin");

    // to further promote readability, consider renaming the station name
    // to a name that's more descriptive of a station.
    // additionally, instead of manually setting these attributes,
    // this is where dock('station') could be invoked, and then the
    // attributes rechecked to see changes
    newClass.station = "something";
    newClass.user = null;

    // dock('station') could be invoked here

    expect(newClass.station).toEqual("something");
    expect(newClass.user).toBe(null);
  });

  //requestRepair method
  test("requestRepair", async () => {
    // since a new scooter starts with isBroken being false by default,
    // we can set scooter's isBroken property to true before calling requestRepair()
    const scooter = new Scooter();
    await scooter.requestRepair();
    expect(scooter.isBroken).toEqual(false);
  }, 6000);

  //charge method
  test("recharge", async () => {
    const scooter = new Scooter(null, "kevin", 423, 432, 80, false);
    await scooter.recharge(); // we need to wait for the charge!
    expect(scooter.charge).toBe(100);
  }, 10000);
});
