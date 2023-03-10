class User {
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  login(password) {
    if (this.password === password) {
      this.loggedIn = true;
      // we can remove this and next return statements
      // as there is nothing being returned for this method
      return true
    } else {
      return false
      // because of the previous return statement,
      // this error is never thrown
      throw new Error("Incorrect password");
    }
  }

  logout() {
    this.loggedIn = false;
  }
}

module.exports = User;
