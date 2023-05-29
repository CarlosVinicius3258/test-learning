import { render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  const button = screen.getByRole('button', {name: 'Change to blue'})

  expect(button).toHaveStyle({backgrundColor: 'red'})
})

test('button has correct initial text', () => {
  render(<App />)
  const button = screen.getByRole('button', { name: 'Change to blue' })
  expect(button.textContent).toBe('Change to blue')
});

test('button turns blue when clicked', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' })
  button.click()
  expect(button).toHaveStyle({backgroundColor: 'blue'})
});

test('button change text when clicked', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: "Change to red" })
  expect(button.textContent).toBe("Change to red")
})