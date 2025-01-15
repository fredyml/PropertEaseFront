import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PropertyDetails from './PropertyDetails';
import '@testing-library/jest-dom';

describe('PropertyDetails Component', () => {
  const mockOnClose = jest.fn();
  const property = {
    name: 'Property 1',
    address: '123 Street Name, City',
    price: 100000,
    description: 'A beautiful home in a great location.',
  };

  it('should render property details correctly when property is provided', () => {
    render(<PropertyDetails property={property} onClose={mockOnClose} />);

    expect(screen.getByText('Property 1')).toBeInTheDocument();
    expect(screen.getByText('123 Street Name, City')).toBeInTheDocument();
    expect(screen.getByText('Price: $100000')).toBeInTheDocument();
    expect(screen.getByText('Description: A beautiful home in a great location.')).toBeInTheDocument();
  });

  it('should call onClose when the close button is clicked', () => {
    render(<PropertyDetails property={property} onClose={mockOnClose} />);

    fireEvent.click(screen.getByLabelText('Close'));

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should render nothing when no property is passed', () => {
    render(<PropertyDetails property={null} onClose={mockOnClose} />);

    expect(screen.queryByText('Property 1')).toBeNull();
  });
});
