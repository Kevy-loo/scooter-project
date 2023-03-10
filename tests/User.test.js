const User = require("../src/User");

// test username
describe("testing User", () => {
  //the first three tests can be condensed into one, where all the attributes
  // are being tested at once
  test("testing username", () => {
    const user = new User("blank", "dsajhbijsdba", 20, true);

    expect(user.username).toBe("blank");
  });
  test("testing password", () => {
    const user = new User("blank", "dsajhbijsdba", 20, true);

    expect(user.password).toBe("dsajhbijsdba");
  });
  test("testing age", () => {
    const user = new User("blank", "dsajhbijsdba", 20, true);
    expect(user.age).toBe(20);
  });
  test("test login", () => {
    const user = new User('blank', '1234', 20);
    console.log(user)

    // if we remove the return statements in the User class,
    // this first expectation statement can be removed too
    expect(user.login('1234')).toBe(true); // Use Jest's expect function to check that the login method returns true when the correct username and password are provided
    expect(user.loggedIn).toBe(true); // Use Jest's expect function to check that the loggedIn property is set to true after a successful login
  });

  test("test logout", () => {
    const user = new User('blank', '1234', 20, true);

    user.login('blank', '1234'); // Call the login method to log the user in
    user.logout(); // Call the logout method to log the user out
    expect(user.loggedIn).toBeFalsy(); // Use Jest's expect function to check that the loggedIn property is set to false after a logout
  });

  // let's add a test here to make sure that an error is being thrown
  // when an incorrect password is given 
});

