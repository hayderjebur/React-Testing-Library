import SummaryForm from '../SummaryForm';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

  userEvent.click(checkbox);
  expect(button).toBeEnabled();

  userEvent.click(checkbox);
  expect(button).toBeDisabled();
});

test('popover responds to hover', async () => {
  render(<SummaryForm />);
  //popover starts out hiddin
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).toBeNull();
  //popover appears upon mouseover of checkbox label
  const termAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termAndConditions);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();
  //popover disappers when we mouse out
  userEvent.unhover(termAndConditions);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
});
