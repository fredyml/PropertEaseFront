import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PropertyGrid from './PropertyGrid';
import '@testing-library/jest-dom';
import { getProperties } from '../../services/propertyService'; // Adjust this path as needed
import PropertyCard from '../PropertyCard/PropertyCard';

// Mock the getProperties API function
jest.mock('../../services/propertyService', () => ({
  getProperties: jest.fn(),
}));

describe('PropertyGrid Component', () => {
  const filters = { name: '', address: '', minPrice: '', maxPrice: '' };

  it('should display loading text initially', () => {
    render(<PropertyGrid filters={filters} />);
    expect(screen.getByText('Loading properties...')).toBeInTheDocument();
  });


  it('should not show loading text after properties are fetched', async () => {
    // Mock the getProperties function to return a sample response
    const mockProperties = [
      { id: 1, name: 'Property 1', address: '123 Main St' },
    ];
    getProperties.mockResolvedValueOnce({ data: mockProperties });

    render(<PropertyGrid filters={filters} />);

    // Wait for the properties to be fetched and rendered
    await waitFor(() => expect(screen.queryByText('Loading properties...')).not.toBeInTheDocument());
  });

  it('should handle empty property list', async () => {
    // Mock the getProperties function to return an empty list
    getProperties.mockResolvedValueOnce({ data: [] });

    render(<PropertyGrid filters={filters} />);

    // Wait for the properties to be fetched and rendered
    await waitFor(() => expect(getProperties).toHaveBeenCalledTimes(1));

    // Check that no property cards are rendered
    expect(screen.queryByText('Property 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Property 2')).not.toBeInTheDocument();
    expect(screen.getByText('Loading properties...')).toBeInTheDocument();
  });

  it('should call getProperties with the correct filters', async () => {
    const mockProperties = [
      { id: 1, name: 'Property 1', address: '123 Main St' },
    ];
    getProperties.mockResolvedValueOnce({ data: mockProperties });

    render(<PropertyGrid filters={filters} />);

    // Wait for the properties to be fetched and rendered
    await waitFor(() => expect(getProperties).toHaveBeenCalledWith(filters));
  });
});
