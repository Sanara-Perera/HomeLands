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

  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  
  const [draggedProperty, setDraggedProperty] = useState(null);


  const handleSearch = (criteria) => {
    let results = properties.filter(property => {
      
      if (criteria.type && criteria.type !== 'any' && property.type !== criteria.type) {
        return false;
      }
      
      
      if (criteria.minPrice && property.price < parseInt(criteria.minPrice)) {
        return false;
      }
      if (criteria.maxPrice && property.price > parseInt(criteria.maxPrice)) {
        return false;
      }
      
      
      if (criteria.minBedrooms && property.bedrooms < parseInt(criteria.minBedrooms)) {
        return false;
      }
      if (criteria.maxBedrooms && property.bedrooms > parseInt(criteria.maxBedrooms)) {
        return false;
      }
      
      
      const propertyDate = new Date(property.dateAdded);
      if (criteria.dateAfter) {
        const afterDate = new Date(criteria.dateAfter);
        if (propertyDate < afterDate) return false;
      }
      if (criteria.dateBefore) {
        const beforeDate = new Date(criteria.dateBefore);
        if (propertyDate > beforeDate) return false;
      }
      
      
      if (criteria.postcode && !property.postcode.toLowerCase().includes(criteria.postcode.toLowerCase())) {
        return false;
      }
      
      return true;
    });
    
    setSearchResults(results);
    setHasSearched(true);
  };


  const handleDragStart = (property) => {
    setDraggedProperty(property);
  };

  const handleDropToFavourites = () => {
    if (draggedProperty) {
      onToggleFavourite(draggedProperty);
      setDraggedProperty(null);
    }
  };


  const handleDropToRemove = () => {
    if (draggedProperty) {
      onToggleFavourite(draggedProperty);
      setDraggedProperty(null);
    }
  };

  
  const displayProperties = hasSearched ? searchResults : properties;

  return (
    <div className="search-page">
      
      <header className="search-header">
        <div className="header-content">
          <div className="logo-container">
            <img 
              src="PrimeHomes/images/logoImage.png" 
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

      
      <div className="search-container">
        <div className="search-main">
          
          <SearchForm onSearch={handleSearch} />

          
          <PropertyList
            properties={displayProperties}
            favourites={favourites}
            onToggleFavourite={onToggleFavourite}
            onViewProperty={onViewProperty}
            onDragStart={handleDragStart}
            hasSearched={hasSearched}
          />
        </div>

        
        <aside className="search-sidebar">
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