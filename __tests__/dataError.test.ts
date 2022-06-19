import { dataError } from '../errors';

describe('dataError object', () => {

  it('Returns an error as an array of artists', () => {
    const error = dataError();
    expect(error[0].title).toBe('Error: No results found');
  })
})
