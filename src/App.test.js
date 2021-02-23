import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color and text', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
  //click button
  fireEvent.click(colorButton);
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
