const Spiderman = require('../app/Spiderman');
describe("Tests for the Spiderman class", () => {
  test('Case 1: Get a Spiderman object  ', () => {
    const andrew = new Spiderman('Spiderman Sony', 31, 'Sony', 2, 'Andrew Garfield');
    expect(andrew.name).toBe('Spiderman Sony');
    expect(andrew.age).toBe(31);
    expect(andrew.actor).toBe('Andrew Garfield');
    expect(andrew.movies).toBe(2);
    expect(andrew.studio).toBe('Sony');
  });
});