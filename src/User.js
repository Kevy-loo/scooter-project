class User {
  // User code here
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  login(password) {
    if (this.password === password) {
      this.loggedIn = true;
      return true
    } else {
      return false
      throw new Error("Incorrect password");
    }
  }

  logout() {
    this.loggedIn = false;
  }
}

module.exports = User;
