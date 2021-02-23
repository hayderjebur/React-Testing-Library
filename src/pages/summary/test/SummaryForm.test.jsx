import SummaryForm from '../SummaryForm';
import { render, screen, fireEvent } from '@testing-library/react';

test('checkbox unchecked by default', () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');
  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});

test('check the checkbox enable button', () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
});
