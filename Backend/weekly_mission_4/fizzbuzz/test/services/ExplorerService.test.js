const ExplorerService = require('../../lib/services/ExplorerServices');
const Reader = require('../../lib/utils/Reader');

const explorers = Reader.readJsonFile('./explorers.json');
describe('Test suite for ExplorerService class', () => {
  test('Case 1. Test for filter by mission method', () => {
    const result = ExplorerService.filterByMission(explorers, 'node');
    console.log(result.length);
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThanOrEqual(1);
  });

  test('Case 2. Test for getAmountOfExplorersByMission method', () => {
    const result = ExplorerService.getAmountOfExplorersByMission(explorers, 'node');
    expect(result).not.toBe(0);
  });

  test('Case 3. Test for getExplorersUsernamesByMission method', () => {
    const result = ExplorerService.getExplorersUsernamesByMission(explorers, 'java');
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThanOrEqual(1);
  });
});