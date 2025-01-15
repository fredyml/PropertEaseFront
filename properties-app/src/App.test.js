import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App'; // Adjust the import based on your file structure

// Mocking necessary components and services
jest.mock('./components/Filters/Filters', () => {
  return ({ filters, handleFilterChange, handleSearch }) => (
    <div>
      <input
        data-testid="name-input"
        value={filters.name}
        onChange={(e) => handleFilterChange({ ...filters, name: e.target.value })}
      />
      <button data-testid="search-button" onClick={handleSearch}>Buscar</button>
    </div>
  );
});

jest.mock('./components/PropertyGrid/PropertyGrid', () => {
  return ({ filters }) => <div>{JSON.stringify(filters)}</div>;
});

describe('App Component', () => {
  it('should update filters and pass them to PropertyGrid', async () => {
    render(<App />);

    const nameInput = screen.getByTestId('name-input');
    const searchButton = screen.getByTestId('search-button');

    // Initial render: check for default filters in PropertyGrid
    expect(screen.getByText(JSON.stringify({ name: '', address: '', minPrice: '', maxPrice: '' }))).toBeInTheDocument();

    // Change the "name" filter
    fireEvent.change(nameInput, { target: { value: 'New Property' } });

    // Simulate the search button click
    fireEvent.click(searchButton);

    // Ensure the filter is updated and passed to PropertyGrid
    await waitFor(() => {
      expect(screen.getByText(JSON.stringify({ name: 'New Property', address: '', minPrice: '', maxPrice: '' }))).toBeInTheDocument();
    });
  });
});
