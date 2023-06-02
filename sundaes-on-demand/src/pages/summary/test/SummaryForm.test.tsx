import { render, screen } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import UserEvent from '@testing-library/user-event';


test('default values', () => {

  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
  const button = screen.getByRole('button', {
    name: /Confirm order/i
  });

  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});

test('Checking checkbox enable and disables button', async () => {
  const user = UserEvent.setup();
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
  const button = screen.getByRole('button', { name: 'Confirm order' });

  await user.click(checkbox);
  expect(button).toBeEnabled();
  await user.click(checkbox);
  expect(button).toBeDisabled();

});