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

test('checkbox init', () => {
  render(<App />)

  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})

test('checkbox disable buton on first click and enables clicking again', ()=> {
  render(<App /> )
  //const checkbox = screen.getByRole('checkbox')
   const checkbox = screen.getByRole('checkbox', {name: 'Disable Button'})
  const button = screen.getByRole('button', {name: 'Change to blue'})

  fireEvent.click(checkbox)
  expect(button).toBeDisabled()
  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
})


