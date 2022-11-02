import { artistNotFoundError } from '../errors';

describe('artistNotFound error', () => {

  it('Returns an error as type Artist', () => {
    const testError = artistNotFoundError();
    expect(testError.title).toBe('Error: Artist Not Found');
  })
})
