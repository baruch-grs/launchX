const UserView = require('../../app/views/Userview');

describe('Test suite for UserView class', () => {
  test('Case 1: Return an error object when a null is sended', () => {
    const payload = null;
    const result = UserView.createUser(payload);

    expect(result.error).toMatch(/payload no existe/);
  });
});