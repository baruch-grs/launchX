const User = require('../models/User');

class UserService {
  static create(id, username, name) {
    return new User(id, username, name, 'Sin bio');
  }

  static getInfo(user) {
    return [
      user.id,
      user.username,
      user.name,
      user.bio
    ];
  }

  static updateUsername(user, str) {
    user.username = str;
  }

  static getAllUsernames(arrObj) {
    return arrObj.map((item) => item.username);
  }
}

module.exports = UserService;