const Userservice = require('../services/Userservice');

class UserView {
  static createUser(payload) {
    if (payload === null) {
      console.log('ERROR. EL PAYLOAD ES NULL');
      return {
        error: 'El payload no existe',
      };
    } else if (typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number') {
      return Userservice.create(payload.id, payload.username, payload.name);
    } else {
      return {
        error: 'ERROR: Las propiedades del payload necesitan tener valores válidos',
      };
    }
  }
}

module.exports = UserView;