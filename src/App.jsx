/**
 * App.jsx
 * Main application component - acts as the central state manager and router
 * Handles navigation between search and property details views
 * Manages favourites state across the entire application
 * 
 */

import React, { useState } from 'react';
import SearchPage from './components/SearchPage';
import PropertyDetails from './components/PropertyDetails';
import { propertiesData } from './data/properties';
import './App.css';
import Footer from './components/Footer';



function App() {
  // View state - controls which page is displayed
  const [view, setView] = useState('search'); 
  // Currently selected property for detail view
  const [selectedProperty, setSelectedProperty] = useState(null);
  
  
  const [favourites, setFavourites] = useState([]);

  /**
   * Toggle favourite status of a property
   * If property is already favourited, remove it; otherwise add it
   */

  const toggleFavourite = (property) => {
  setFavourites(prev =>
    prev.some(f => f.id === property.id)
      ? prev.filter(f => f.id !== property.id)
      : [...prev, property]
  );
};

  //Clear all favourites at once
  const clearFavourites = () => {
    setFavourites([]);
  };

  //Navigate to property details page
  const viewPropertyDetails = (property) => {
    setSelectedProperty(property);
    setView('property');
  };

  //Navigate back to search page from property details
  const backToSearch = () => {
    setView('search');
    setSelectedProperty(null);
  };

  return (
    <div className="app">
      {/* Show search page when view === 'search' */}
      {view === 'search' && (
        <SearchPage
          properties={propertiesData}
          favourites={favourites}
          onToggleFavourite={toggleFavourite}
          onClearFavourites={clearFavourites}
          onViewProperty={viewPropertyDetails}
        />
      )}
      {/*Show property details when view === 'property' */}
      {view === 'property' && selectedProperty && (
        <PropertyDetails
          property={selectedProperty}
          favourites={favourites}
          onToggleFavourite={toggleFavourite}
          onBack={backToSearch}
        />
      )}
      
      {/* Footer is displayed on all pages */}
      <Footer />
    </div>
  );
}

export default App;