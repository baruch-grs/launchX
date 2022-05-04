const Spiderman = require('../app/Spiderman');
describe("Tests for the Spiderman class", () => {
  test('Case 1: Get a Spiderman object  ', () => {
    const andrew = new Spiderman('Spiderman Sony', 31, 'Sony', 2, 'Andrew Garfield');
    const holland = new Spiderman('Spiderman Marvel', 25, 'Marvel', 5, 'Tom Holland');

    expect(andrew.getMovies).toBe(2);
    expect(andrew.name).toBe('Spiderman Sony');
    expect(andrew.age).toBe(31);
    expect(andrew.actor).toBe('Andrew Garfield');
    expect(andrew.movies).toBe(2);
    expect(andrew.studio).toBe('Sony');
    expect(holland.getAge).toBe(25);
    expect(holland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio");
    expect(holland.getActor).toBe('Tom Holland');
    expect(holland.getName).toBe('Spiderman Marvel');

  });
});