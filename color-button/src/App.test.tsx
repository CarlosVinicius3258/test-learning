import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button change on click', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' });

  expect(button).toHaveStyle({"background-color": "red"});

  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: 'blue' });

  expect(button).toHaveTextContent("Change to red");
});



