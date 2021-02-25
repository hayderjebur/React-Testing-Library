import { render, screen } from '@testing-library/react';

import Options from '../Options';
import ScoopOption from '../ScoopOption';

test('displays image for each scoop option from server', async () => {
  render(<Options optionType='scoops' />);

  //find images
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });

  expect(scoopImages).toHaveLength(2);

  //confirm alt of images
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('topping', async () => {
  render(<Options optionType='toppings' />);

  const images = await screen.findAllByRole('img', { name: /topping$/i });
  expect(images).toHaveLength(3);

  const imageTitles = images.map((img) => img.alt);
  expect(imageTitles).toEqual([
    'Cherries topping',
    'Hot fudge topping',
    'M&MS topping',
  ]);
});
