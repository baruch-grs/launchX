const UserService = require('../../app/services/Userservice');

describe('Suite test for UserService', () => {
  test('Case 1: Create new user using de UserService', () => {
    const user = UserService.create(1, 'ezpk', 'Baruch Guerra');
    expect(user.username).toBe('ezpk');
    expect(user.name).toBe('Baruch Guerra');
    expect(user.id).toBe(1);
    expect(user.bio).not.toBeUndefined();
  });

  test('Case 2: Get all user data in a list', () => {
    const user = UserService.create(1, 'ezpk', 'Baruch');
    const userInfoList = UserService.getInfo(user);
    expect(userInfoList[0]).toBe(1);
    expect(userInfoList[1]).toBe('ezpk');
    expect(userInfoList[2]).toBe('Baruch');
    expect(userInfoList[3]).toBe('Sin bio');
  });

  test('Case 3. Updating username', () => {
    const user = UserService.create(1, 'ezpk', 'Baruch');
    UserService.updateUsername(user, 'baruchg');
    expect(user.username).toBe('baruchg');
  });

  test('Case 4: Given a list of users, give me the list of usernames', () => {
    const user1 = UserService.create(1, 'ezpk1', "Baruch");
    const user2 = UserService.create(1, 'ezpk2', "Baruch");
    const user3 = UserService.create(1, 'ezpk3', "Baruch");
    const usernames = UserService.getAllUsernames([user1, user2, user3]);

    expect(usernames).toContain('ezpk1');
    expect(usernames).toContain('ezpk2');
    expect(usernames).toContain('ezpk3');
  });
});