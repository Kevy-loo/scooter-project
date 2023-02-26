const Scooter = require("../src/Scooter");
// const User = require("../src/User");

//typeof scooter === object
describe("scooter object", () => {
  test("does something", () => {
    // edit this to be a real test!
    expect(typeof new Scooter()).toEqual("object");
  });
});

//Method tests
describe("scooter methods", () => {
  // tests here!

  //rent method
  test("renting", () => {
    const newClass = new Scooter("something", "kevin", 423, 432, 24, false);

    expect(newClass.charge).toBeGreaterThan(20);
    expect(newClass.isBroken).toEqual(false);
  });

  //dock method
  test("docking", () => {
    const newClass = new Scooter(null, "kevin", 423, 432, 24, false);

    expect(newClass.station).toEqual(null);
    expect(newClass.user).toBe("kevin");

    newClass.station = "something";
    newClass.user = null;

    expect(newClass.station).toEqual("something");
    expect(newClass.user).toBe(null);
  });

  //requestRepair method
  test("requestRepair", async () => {
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
