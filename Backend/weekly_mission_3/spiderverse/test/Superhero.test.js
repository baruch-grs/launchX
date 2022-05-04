const Superhero = require('../app/Superhero');

describe("Test Suite to SuperHero class", () => {
  test('Case 1: Attributes', () => {
    const ironman = new Superhero('Iron Man', 'Tony Stark', 'Robert Downey Jr');
    expect(ironman.heroName).toBe('Iron Man');
    expect(ironman.name).toBe('Tony Stark');
    expect(ironman.actor).toBe('Robert Downey Jr');
  });
});