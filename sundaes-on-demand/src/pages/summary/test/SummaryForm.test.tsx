import { render, screen, } from '@testing-library/react';
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

test('popover responds to hover', async () => {
  const user = UserEvent.setup();

  render(<SummaryForm />);
  //popover starts out of the Document
  const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i); // here I used 'queryByText' because I didn't expect the element to be in the document
  expect(nullPopover).not.toBeInTheDocument();

  //popover appears on hover

  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditions);

  const popover = screen.getByText(/no ice cream will actually be delivered/i); // here I used 'getByText' because I expected the element to be in the document
  expect(popover).toBeInTheDocument();

  //popover disappear when mouse out

  await user.unhover(termsAndConditions);
  expect(popover).not.toBeInTheDocument();

});