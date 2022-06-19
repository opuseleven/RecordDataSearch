import { ReleasesNotFoundError } from '../errors';

describe('ReleasesNotFoundError object', () => {

  it('Returns an error message as an array of Releases', () => {
    const error = ReleasesNotFoundError();
    expect(error[0].title).toBe('Error: No releases found!');
  })
})
