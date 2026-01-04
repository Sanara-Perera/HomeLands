/**
 * SearchPage.js
 * Main search page component - combines search form, property list, and favourites
 * Features:
 * - Dynamic property filtering based on search criteria
 * - Drag-and-drop between property cards and favourites
 * - Responsive layout with sticky sidebar
 * - Header with branding
 * 
 * Security: All user input is handled client-side with React state
 * No direct DOM manipulation - all rendering via React JSX
 */


import React, { useState } from 'react';
import SearchForm from './SearchForm';
import PropertyList from './PropertyList';
import FavouritesList from './FavouritesList';
import './SearchPage.css';


function SearchPage({ 
  properties, 
  favourites, 
  onToggleFavourite,
  onClearFavourites,
  onViewProperty 
}) {
  
  // Search results state - stores filtered properties
  const [searchResults, setSearchResults] = useState([]);

  // Tracks whether user has performed a search
  const [hasSearched, setHasSearched] = useState(false);

  // Drag and drop state - stores property being dragged
  const [draggedProperty, setDraggedProperty] = useState(null);

  /**
   * Filter properties based on search criteria
   * Applies multiple filters: type, price, bedrooms, date, postcode
   */
  const handleSearch = (criteria) => {
    let results = properties.filter(property => {
      // Filter by property type (house/flat)
      if (criteria.type && criteria.type !== 'any' && property.type !== criteria.type) {
        return false;
      }
      
      // Filter by price range
      if (criteria.minPrice && property.price < parseInt(criteria.minPrice)) {
        return false;
      }
      if (criteria.maxPrice && property.price > parseInt(criteria.maxPrice)) {
        return false;
      }
      
      // Filter by number of bedrooms
      if (criteria.minBedrooms && property.bedrooms < parseInt(criteria.minBedrooms)) {
        return false;
      }
      if (criteria.maxBedrooms && property.bedrooms > parseInt(criteria.maxBedrooms)) {
        return false;
      }
      
      // Filter by date added range
      const propertyDate = new Date(property.dateAdded);
      if (criteria.dateAfter) {
        const afterDate = new Date(criteria.dateAfter);
        if (propertyDate < afterDate) return false;
      }
      if (criteria.dateBefore) {
        const beforeDate = new Date(criteria.dateBefore);
        if (propertyDate > beforeDate) return false;
      }
      
      // Filter by postcode (case-insensitive partial match)
      if (criteria.postcode && !property.postcode.toLowerCase().includes(criteria.postcode.toLowerCase())) {
        return false;
      }
      
      return true;
    });
    
    setSearchResults(results);
    setHasSearched(true);
  };

  //Handle drag start - store property being dragged
  const handleDragStart = (property) => {
    setDraggedProperty(property);
  };

  /**
   * Handle drop into favourites area
   * Adds dragged property to favourites if not already added
   */
  const handleDropToFavourites = () => {
    if (draggedProperty) {
      onToggleFavourite(draggedProperty);
      setDraggedProperty(null);
    }
  };

  /**
   * Handle drop into remove zone
   * Removes dragged property from favourites
   */
  const handleDropToRemove = () => {
    if (draggedProperty) {
      onToggleFavourite(draggedProperty);
      setDraggedProperty(null);
    }
  };

  // Show search results if search performed, otherwise show all properties
  const displayProperties = hasSearched ? searchResults : properties;

  return (
    <div className="search-page">
      {/* Header with logo and branding */}
      <header className="search-header">
        <div className="header-content">
          <div className="logo-container">
            <img 
              src={`${process.env.PUBLIC_URL}/images/logoImage.png`}
              alt="PrimeHomes Logo" 
              className="site-logo"
            />
            <div>
              <h1 className="site-title">PrimeHomes</h1>
              <p className="site-tagline">Find Your Perfect Property</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main content - search and results */}
      <div className="search-container">
        <div className="search-main" id="search">
          {/* Search form */}
          <SearchForm onSearch={handleSearch} />

          {/* Property results grid */}
          <PropertyList
            properties={displayProperties}
            favourites={favourites}
            onToggleFavourite={onToggleFavourite}
            onViewProperty={onViewProperty}
            onDragStart={handleDragStart}
            hasSearched={hasSearched}
          />
        </div>

        {/* Favourites sidebar - sticky on desktop */}
        <aside className="search-sidebar" id="favourites">
          <FavouritesList
            favourites={favourites}
            onToggleFavourite={onToggleFavourite}
            onClearFavourites={onClearFavourites}
            onViewProperty={onViewProperty}
            onDropToFavourites={handleDropToFavourites}
            onDropToRemove={handleDropToRemove}
            onDragStart={handleDragStart}
          />
        </aside>
      </div>
    </div>
  );
}

export default SearchPage;