import { render } from '@testing-library/react';
import NavBar from 'components/common/NavBar';

test('NavBar placeholder', () => {
  render(<NavBar />);
  expect(false).toBeFalsy();
});
