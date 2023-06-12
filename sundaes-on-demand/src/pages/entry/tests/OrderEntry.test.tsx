import { render, screen, waitFor } from '@testing-library/react';
import OrderEntry from '../OrderEntry';
import { rest } from 'msw';
import { server } from '../../../mocks/server';
import { resetWithErrorHandlers } from '../../../mocks/handlers';

test('handles error for scoops and toppings routes', async () => {
  resetWithErrorHandlers();

  render(<OrderEntry />);
  await waitFor(async () => {
    const alerts = await screen.findAllByRole("alert");
    expect(alerts).toHaveLength(2);
  });

}); 