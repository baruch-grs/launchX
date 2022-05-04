const MissionCommander = require('./../app/missionCommander');
describe("Esto es una suite de pruebas", () => {
  test('Caso de prueba 1', () => {
    const result = 1 + 2;
    expect(result).toBe(3);
  });
});

describe('Pruebas unitarias para la clase MissionCommander', () => {
  test('Create a mission commander object', () => {
    const newMissionComander = new MissionCommander('Test');
    expect(newMissionComander.name).toBe('Test');
    expect(newMissionComander.name).not.toBe('Carlos');
    expect(newMissionComander.name).toBeDefined();
  });

});