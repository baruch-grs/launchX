const Reader = require('../../lib/utils/Reader');
const path = require('path');

const myPath = path.join(__dirname, '../dummy.json');
describe('Suite test for class Reader', () => {
  test('Case 1. Test for readjsonFile method', () => {
    const data = Reader.readJsonFile(myPath);
    expect(data).toBeDefined();
  });
}); 