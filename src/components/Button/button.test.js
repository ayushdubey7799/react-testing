import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import ResponsiveButton from './ResponsiveButton';
import { render } from '@testing-library/react';

test('ResponsiveButton snapshot', () => {
  const tree = render(<ResponsiveButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
