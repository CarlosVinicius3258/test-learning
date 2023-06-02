import { render, screen } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';
import UserEvent from '@testing-library/user-event';

test('button change on click', async () => {
  const user = UserEvent.setup();
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  expect(button).toHaveStyle({ "background-color": "MediumVioletRed" });

  await user.click(button);
  expect(button).toHaveStyle({ 'background-color': 'MidnightBlue' });

  expect(button).toHaveTextContent("Change to Medium Violet Red");
});

test('checkbox init', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('checkbox disable buton on first click and enables clicking again', async () => {
  const user = UserEvent.setup();
  render(<App />);
  //const checkbox = screen.getByRole('checkbox')
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  await user.click(checkbox);
  expect(button).toBeDisabled();
  await user.click(checkbox);
  expect(button).toBeEnabled();
});
test('Button gray when disabled', async () => {
  const user = UserEvent.setup();

  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  await user.click(checkbox);
  expect(button).toHaveStyle({ 'background-color': 'gray' });
  await user.click(checkbox);
  expect(button).toHaveStyle({ 'background-color': 'MediumVioletRed' });
  await user.click(button);
  await user.click(checkbox);
  expect(button).toHaveStyle({ 'background-color': 'gray' });
  await user.click(checkbox);
  expect(button).toHaveStyle({
    'background-color': 'MidnightBlue'
  });
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('Midnight Blue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('Medium Violet Red')).toBe('Medium Violet Red');
  });
});