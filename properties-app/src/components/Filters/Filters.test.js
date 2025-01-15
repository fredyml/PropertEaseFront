import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Filters from './Filters';
import '@testing-library/jest-dom';

describe('Filters Component', () => {
  let handleFilterChange;

  beforeEach(() => {
    handleFilterChange = jest.fn();
  });

  it('should render all filter inputs and the search button', () => {
    render(<Filters filters={{}} handleFilterChange={handleFilterChange} />);

    expect(screen.getByPlaceholderText('Search by name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search by address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Min price')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Max price')).toBeInTheDocument();
    expect(screen.getByText('Buscar')).toBeInTheDocument();
  });

  it('should show an error message when only one of minPrice or maxPrice is provided', () => {
    render(<Filters filters={{}} handleFilterChange={handleFilterChange} />);

    fireEvent.change(screen.getByPlaceholderText('Min price'), {
      target: { value: '100' },
    });
    fireEvent.click(screen.getByText('Buscar'));

    expect(screen.getByText('Debe ingresar valores tanto para el precio mínimo como para el precio máximo.')).toBeInTheDocument();
  });

  it('should show an error message when minPrice is greater than maxPrice', () => {
    render(<Filters filters={{}} handleFilterChange={handleFilterChange} />);

    fireEvent.change(screen.getByPlaceholderText('Min price'), {
      target: { value: '200' },
    });
    fireEvent.change(screen.getByPlaceholderText('Max price'), {
      target: { value: '100' },
    });
    fireEvent.click(screen.getByText('Buscar'));

    expect(screen.getByText('El precio mínimo no puede ser mayor que el precio máximo.')).toBeInTheDocument();
  });

  it('should call handleFilterChange with the correct filters when search is valid', async () => {
    render(<Filters filters={{}} handleFilterChange={handleFilterChange} />);

    fireEvent.change(screen.getByPlaceholderText('Min price'), {
      target: { value: '100' },
    });
    fireEvent.change(screen.getByPlaceholderText('Max price'), {
      target: { value: '500' },
    });
    fireEvent.change(screen.getByPlaceholderText('Search by name'), {
      target: { value: 'Property' },
    });
    fireEvent.change(screen.getByPlaceholderText('Search by address'), {
      target: { value: 'Street' },
    });

    fireEvent.click(screen.getByText('Buscar'));

    await waitFor(() => {
      expect(handleFilterChange).toHaveBeenCalledWith({
        name: 'Property',
        address: 'Street',
        minPrice: '100',
        maxPrice: '500',
      });
    });
  });

  it('should close the error modal when the close button is clicked', async () => {
    render(<Filters filters={{}} handleFilterChange={handleFilterChange} />);

    fireEvent.change(screen.getByPlaceholderText('Min price'), {
      target: { value: '200' },
    });
    fireEvent.change(screen.getByPlaceholderText('Max price'), {
      target: { value: '100' },
    });
    fireEvent.click(screen.getByText('Buscar'));

    expect(screen.getByText('El precio mínimo no puede ser mayor que el precio máximo.')).toBeInTheDocument();

    // Close the modal
    fireEvent.click(screen.getByText('Cerrar'));

    // Wait for the modal to disappear
    await waitFor(() => {
      expect(screen.queryByText('El precio mínimo no puede ser mayor que el precio máximo.')).not.toBeInTheDocument();
    });
  });
});
