const User = require('../app/models/User');

describe("Test Suite for User model", () => {
  test('Case 1: Attributes', () => {
    const user = new User(1, 'ezpk', 'Baruch Guerra', 'My bio');

    // Setters tests
    user.setUsername = 'Elhyoz';
    expect(user.username).toBe('Elhyoz');

    user.setBio = 'New bio';
    expect(user.bio).toBe('New bio');

    // Return values before the change to test it
    user.setBio = 'My bio';
    user.setUsername = 'ezpk';

    // Getters tests
    expect(user.getBio).toBe('My bio');
    expect(user.getDateCreated).not.toBeUndefined();
    expect(user.getUsername).toBe('ezpk');
    expect(user.getLastUpdated).not.toBeUndefined();

    // Attributes tests
    expect(user.id).toBe(1);
    expect(user.username).toBe('ezpk');
    expect(user.name).toBe('Baruch Guerra');
    expect(user.bio).toBe('My bio');
    expect(user.dateCreated).not.toBeUndefined();
    expect(user.lastUpdated).not.toBeUndefined();
  });
});