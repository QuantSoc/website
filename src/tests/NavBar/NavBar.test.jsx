import { render } from '@testing-library/react';
import NavBar from '/src/components/common/NavBar';

test('NavBar placeholder', () => {
  render(<NavBar />);
  expect(false).toBeFalsy();
});
