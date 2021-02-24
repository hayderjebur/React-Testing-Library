import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('button has correct initial color and text', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
  //click button
  userEvent.click(colorButton);
  //expect the color change to blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  //expect the text chage after clicked
  expect(colorButton).toHaveTextContent('Change to red');
});

test('initial conditions', () => {
  render(<App />);
  //check the button starts enable
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();

  //check the checkbox starts unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});
test('button disable after check the checkbox', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const button = screen.getByRole('button', { name: 'Change to blue' });

  userEvent.click(checkbox);
  expect(button).toBeDisabled();

  userEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test('the button is gray after disable it ', () => {
  render(<App />);

  const button = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox');

  userEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  userEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'red' });

  userEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: 'blue' });
});
