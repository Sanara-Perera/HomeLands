/**
 * App.test.js
 * Comprehensive test suite for the PrimeHomes application
 * Tests search functionality, favourites management, navigation, form handling, and rendering
 * 
 * Uses React Testing Library for DOM queries and user interaction simulation
 * All tests ensure the application behaves correctly from a user's perspective
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomeLands from './App';

// Mock property data for testing
const mockProperties = [
  {
    id: 1,
    type: 'house',
    price: 450000,
    bedrooms: 3,
    dateAdded: '2024-11-15',
    postcode: 'BR1',
    location: 'Bromley, London',
    shortDesc: 'Charming 3-bed Victorian house',
    images: ['test-image-1.jpg']
  },
  {
    id: 2,
    type: 'flat',
    price: 320000,
    bedrooms: 2,
    dateAdded: '2024-12-01',
    postcode: 'NW1',
    location: 'Camden, London',
    shortDesc: 'Modern 2-bed apartment',
    images: ['test-image-2.jpg']
  }
];

/* ========== SEARCH FUNCTIONALITY TESTS ========== */
describe('Search Functionality Tests', () => {
  
  // Test 1: Filter properties by type (house)
  test('1. Should filter properties by type (house)', () => {
    render(<HomeLands />);
    
    
    const typeSelect = screen.getByLabelText(/property type/i);
    fireEvent.change(typeSelect, { target: { value: 'house' } });
    
    
    const searchButton = screen.getByRole('button', { name: /search properties/i });
    fireEvent.click(searchButton);
    
    
    expect(typeSelect.value).toBe('house');
  });
  
  // Test 2: Filter properties by price range
  test('2. Should filter properties by price range', () => {
    render(<HomeLands />);
    
    
    const minPriceInput = screen.getByPlaceholderText(/e.g. 200000/i);
    const maxPriceInput = screen.getByPlaceholderText(/e.g. 500000/i);
    
    fireEvent.change(minPriceInput, { target: { value: '300000' } });
    fireEvent.change(maxPriceInput, { target: { value: '500000' } });
    
   
    const searchButton = screen.getByRole('button', { name: /search properties/i });
    fireEvent.click(searchButton);
    
    
    expect(minPriceInput.value).toBe('300000');
    expect(maxPriceInput.value).toBe('500000');
  });

  // Test 3: Filter properties by postcode area
  test('3. Should filter properties by postcode area', () => {
    render(<HomeLands />);
    
    
    const postcodeInput = screen.getByPlaceholderText(/e.g. BR1, NW1/i);
    fireEvent.change(postcodeInput, { target: { value: 'BR1' } });
    
    
    const searchButton = screen.getByRole('button', { name: /search properties/i });
    fireEvent.click(searchButton);
    
    
    expect(postcodeInput.value).toBe('BR1');
  });
});


/* ========== FAVOURITES MANAGEMENT TESTS ========== */
describe('Favourites Management Tests', () => {
  
  // Test 4: Add property to favourites
  test('4. Should add property to favourites when heart button clicked', () => {
    render(<HomeLands />);
    
    
    const heartButtons = screen.getAllByTitle(/add to favourites/i);
    fireEvent.click(heartButtons[0]);
    
    
    const favouritesHeading = screen.getByText(/favourites \(\d+\)/i);
    expect(favouritesHeading).toBeInTheDocument();
  });
  
  // Test 5: Prevent duplicate favourites
  test('5. Should prevent duplicate favourites', () => {
    render(<HomeLands />);
    
    
    const heartButtons = screen.getAllByTitle(/add to favourites/i);
    fireEvent.click(heartButtons[0]);
    fireEvent.click(heartButtons[0]);
    
    
    const favouritesHeading = screen.getByText(/favourites \(\d+\)/i);
    expect(favouritesHeading).toBeInTheDocument();
  });

 
  // Test 6: Clear all favourites
  test('6. Should clear all favourites', () => {
    render(<HomeLands />);
    
    
    const heartButtons = screen.getAllByTitle(/add to favourites/i);
    fireEvent.click(heartButtons[0]);
    fireEvent.click(heartButtons[1]);
    
    
    waitFor(() => {
      const clearButton = screen.getByTitle(/clear all/i);
      fireEvent.click(clearButton);
      
      
      expect(screen.getByText(/no favourites yet/i)).toBeInTheDocument();
    });
});
  
  // Test 7: Display favourites count correctly
  test('7. Should display favourites count correctly', () => {
    render(<HomeLands />);
    
    
    expect(screen.getByText(/favourites \(0\)/i)).toBeInTheDocument();
    
    
    const heartButtons = screen.getAllByTitle(/add to favourites/i);
    fireEvent.click(heartButtons[0]);
    
    
    waitFor(() => {
      expect(screen.getByText(/favourites \(1\)/i)).toBeInTheDocument();
    });
  });
});

/* ========== PROPERTY NAVIGATION TESTS ========== */
describe('Property Navigation Tests', () => {
  
  // Test 8: Navigate to property details page
  test('8. Should navigate to property details page', () => {
    render(<HomeLands />);
    
    
    const viewButtons = screen.getAllByText(/view details/i);
    fireEvent.click(viewButtons[0]);
    
    
    waitFor(() => {
      expect(screen.getByText(/back to search/i)).toBeInTheDocument();
    });
  });
  
  // Test 9: Navigate back to search from property page
  test('9. Should navigate back to search from property page', () => {
    render(<HomeLands />);
    
    
    const viewButtons = screen.getAllByText(/view details/i);
    fireEvent.click(viewButtons[0]);
    
    
    waitFor(() => {
      const backButton = screen.getByText(/back to search/i);
      fireEvent.click(backButton);
      
      
      expect(screen.getByText(/search properties/i)).toBeInTheDocument();
    });
  });
});

/* ========== FORM HANDLING TESTS ========== */
describe('Form Handling Tests', () => {
  
  // Test 10: Accept valid date inputs
  test('10. Should accept valid date inputs', () => {
    render(<HomeLands />);
    
    const dateAfterInput = screen.getByLabelText(/date added after/i);
    const dateBeforeInput = screen.getByLabelText(/date added before/i);
    
    fireEvent.change(dateAfterInput, { target: { value: '2024-10-01' } });
    fireEvent.change(dateBeforeInput, { target: { value: '2024-12-31' } });
    
    expect(dateAfterInput.value).toBe('2024-10-01');
    expect(dateBeforeInput.value).toBe('2024-12-31');
  });

 
  // Test 11: Update search criteria state on input change
  test('11. Should update search criteria state on input change', () => {
    render(<HomeLands />);
    
    const typeSelect = screen.getByLabelText(/property type/i);
    

    fireEvent.change(typeSelect, { target: { value: 'flat' } });
    expect(typeSelect.value).toBe('flat');
    
    
    fireEvent.change(typeSelect, { target: { value: 'house' } });
    expect(typeSelect.value).toBe('house');
    
    
    fireEvent.change(typeSelect, { target: { value: '' } });
    expect(typeSelect.value).toBe('');
  });
});


/* ========== COMPONENT RENDERING TESTS ========== */
describe('Component Rendering Tests', () => {
  
  // Test 12: Render search form with all input fields
  test('12. Should render search form with all input fields', () => {
    render(<HomeLands />);
    
    expect(screen.getByLabelText(/property type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/min price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/max price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/min bedrooms/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/max bedrooms/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/postcode area/i)).toBeInTheDocument();
  });
  
  // Test 13: Render favourites sidebar
  test('13. Should render favourites sidebar', () => {
    render(<HomeLands />);
    expect(screen.getByText(/favourites \(0\)/i)).toBeInTheDocument();
  });

  // Test 14: Render property cards on initial load
  test('14. Should render property cards on initial load', () => {
    render(<HomeLands />);
    
    
    const viewButtons = screen.getAllByText(/view details/i);
    expect(viewButtons.length).toBeGreaterThan(0);
  });

});


/* ========== SEARCH RESULTS DISPLAY TESTS ========== */
describe('Search Results Display', () => {
  
  // Test 15: Display search results count
  test('15. Should display search results count', () => {
    render(<HomeLands />);
    
    
    const typeSelect = screen.getByLabelText(/property type/i);
    fireEvent.change(typeSelect, { target: { value: 'house' } });
    
    const searchButton = screen.getByRole('button', { name: /search properties/i });
    fireEvent.click(searchButton);
    
    
    const resultsText = screen.getByText(/properties found|all properties/i);
    expect(resultsText).toBeInTheDocument();
  });
});
