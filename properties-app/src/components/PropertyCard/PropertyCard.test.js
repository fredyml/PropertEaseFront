import React from 'react';
import { render, screen } from '@testing-library/react';
import PropertyCard from './PropertyCard';
import '@testing-library/jest-dom';

describe('PropertyCard Component', () => {
  const property = {
    name: 'Property 1',
    address: '123 Street Name, City',
    price: 100000,
    codeInternal: 'ABC123',
    year: 2020,
    images: [
      { file: 'image1.jpg', enabled: true },
      { file: 'image2.jpg', enabled: false },
    ],
  };


  it('should display images when available and enabled', () => {
    render(<PropertyCard property={property} />);

    const images = screen.getAllByAltText(/Property Image/i);
    expect(images).toHaveLength(1); // Only one image with enabled: true
    expect(images[0]).toHaveAttribute('src', 'image1.jpg');
  });

  it('should display "No images available" when there are no images', () => {
    const propertyWithoutImages = { ...property, images: [] };

    render(<PropertyCard property={propertyWithoutImages} />);

    expect(screen.getByText('No images available')).toBeInTheDocument();
  });

  it('should not display images that are disabled', () => {
    const propertyWithDisabledImages = {
      ...property,
      images: [
        { file: 'image1.jpg', enabled: false },
        { file: 'image2.jpg', enabled: false },
      ],
    };

    render(<PropertyCard property={propertyWithDisabledImages} />);

    const images = screen.queryAllByAltText(/Property Image/i);
    expect(images).toHaveLength(0); // No images should be displayed
  });
});
