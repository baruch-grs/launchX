const UserView = require('../../app/views/Userview');

describe('Test suite for UserView class', () => {
  test('Case 1: Return an error object when a null is sended', () => {
    const payload = null;
    const result = UserView.createUser(payload);
    expect(result.error).toMatch(/payload no existe/);
  });

  test('Case 2. Return an error object when try to create a new user with payload with invalid properties', () => {
    const payload = {
      username: null,
      name: 54,
      id: 'my id',
    };

    const result = UserView.createUser(payload);
    expect(result.error).toMatch(/necesitan tener valores válidos/);
  });

  test('Case 3. Return an error object when try to create a new user with a payload with missing propeties', () => {
    const payload = {
      username: '',
      name: '',
    };
    const result = UserView.createUser(payload);
    expect(result.error).toMatch(/necesitan tener valores válidos/);
  });
});