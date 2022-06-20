import { RenderDiscogObj } from '../components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('RenderDiscogObj component', () => {

  const testData = require('./testdata/releasedata.json');
  const testArr = testData.extraartists;
  const testCompanies = testData.companies;

  it('Component renders', () => {
    render(<RenderDiscogObj obj={testArr[2]} />);
    expect(screen.getByRole('heading')).toHaveTextContent('Bill Henderson')
  })

  it('Component renders with role prop', () => {
    render(<RenderDiscogObj obj={testArr[3]} />);
    expect(screen.getByRole('heading')).toHaveTextContent('David Brock (8)');
    expect(screen.getByText('Role: Percussion')).toBeDefined();
  })

  it('Component renders with entity_type_name prop', () => {
    render(<RenderDiscogObj obj={testCompanies[0]} />);
    expect(screen.getByRole('heading')).toHaveTextContent('Disc Makers');
    expect(screen.getByText('Type: Manufactured By')).toBeDefined();
  })
})
