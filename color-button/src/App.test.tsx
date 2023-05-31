import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

test('button change on click', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' });

  expect(button).toHaveStyle({ "background-color": "red" });

  fireEvent.click(button);
  expect(button).toHaveStyle({ 'background-color': 'blue' });

  expect(button).toHaveTextContent("Change to red");
});

test('checkbox init', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('checkbox disable buton on first click and enables clicking again', () => {
  render(<App />);
  //const checkbox = screen.getByRole('checkbox')
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });
  const button = screen.getByRole('button', { name: 'Change to blue' });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});
test('Button gray when disabled', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });
  const button = screen.getByRole('button', { name: 'Change to blue' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ 'background-color': 'gray' });
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ 'background-color': 'red' });
  fireEvent.click(button);
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ 'background-color': 'gray' });
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({
    'background-color': 'blue'
  });
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});