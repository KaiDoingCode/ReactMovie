/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import Spinner from './components/spinner/Spinner';

describe('Spinner', () => {
  test('displays spinner', () => {
    const { getByTestId } = render(<Spinner />);
    const elem = getByTestId('spinner');
    expect(elem).toBeInTheDocument();
  });

  test('spinner contains 3 elements', () => {
    const { getByTestId } = render(<Spinner />);
    const elem = getByTestId('spinner');
    expect(elem.children.length).toBe(3);
  });
});
