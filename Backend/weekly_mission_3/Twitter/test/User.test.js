const User = require('../app/models/User');

describe("Test Suite for User model", () => {
  test('Case 1: Attributes', () => {
    const user = new User(1, 'ezpk', 'Baruch Guerra', 'My bio', 'dateCreated', 'lastUpdated');

    expect(user.id).toBe(1);
    expect(user.username).toBe('ezpk');
    expect(user.name).toBe('Baruch Guerra');
    expect(user.bio).toBe('My bio');
    expect(user.dateCreated).toBe('dateCreated');
    expect(user.lastUpdated).toBe('lastUpdated');
  });
});