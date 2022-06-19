import { filterByHasType } from '../services';

describe('filterByHasType service', () => {

  const testdata = require('./testdata/brokentestresults.json');

  it('Filters data by has type property', () => {
    const test = filterByHasType(testdata);
    expect(test.length).toBeLessThan(testdata.length);
  })
})
