import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getProperties, getPropertyById } from './propertyService'; // Adjust the import based on your file structure

describe('Property Service', () => {
  let mock;

  beforeEach(() => {
    // Set up a new mock adapter for each test to intercept axios requests
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    // Reset the mock after each test
    mock.reset();
  });

  it('should fetch properties successfully', async () => {
    const mockResponse = {
      data: [
        { id: 1, name: 'Property 1', address: '123 Street', price: 100000 },
        { id: 2, name: 'Property 2', address: '456 Avenue', price: 150000 },
      ],
    };

    mock.onGet('https://localhost:7179/api/properties').reply(200, mockResponse);

    const filters = { name: 'Property' }; // Example filters
    const response = await getProperties(filters);

    expect(response.data).toEqual(mockResponse.data);
    expect(mock.history.get.length).toBe(1); // Ensure the GET request was made once
    expect(mock.history.get[0].params).toEqual(filters); // Ensure filters were passed correctly
  });

  it('should fetch a single property by ID successfully', async () => {
    const mockResponse = {
      data: { id: 1, name: 'Property 1', address: '123 Street', price: 100000 },
    };

    mock.onGet('https://localhost:7179/api/properties/1').reply(200, mockResponse);

    const response = await getPropertyById(1);

    expect(response.data).toEqual(mockResponse.data);
    expect(mock.history.get.length).toBe(1); // Ensure the GET request was made once
    expect(mock.history.get[0].url).toBe('https://localhost:7179/api/properties/1'); // Ensure the URL was correct
  });

  it('should handle error when fetching properties', async () => {
    mock.onGet('https://localhost:7179/api/properties').reply(500);

    try {
      await getProperties();
    } catch (error) {
      expect(error.response.status).toBe(500);
    }
  });

  it('should handle error when fetching property by ID', async () => {
    mock.onGet('https://localhost:7179/api/properties/1').reply(404);

    try {
      await getPropertyById(1);
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });
});
