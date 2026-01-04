/**
 * PropertyList.js
 * Displays filtered property search results in a grid
 * Shows appropriate messaging for empty results
 * Passes drag-and-drop functionality to property cards
 * 
 * Security: All content rendered via React JSX (automatic XSS protection)
 */

import React from 'react';
import PropertyCard from './PropertyCard';
import './PropertyList.css';

function PropertyList({ 
  properties, 
  favourites, 
  onToggleFavourite, 
  onViewProperty,
  onDragStart,
  hasSearched 
}) {

  /**
   * Generate dynamic heading based on search state
   * Shows count when search is active, generic heading otherwise
   * @returns {string} Heading text
   */

  const getHeadingText = () => {
    if (hasSearched && properties.length > 0) {
      return `${properties.length} ${properties.length === 1 ? 'Property' : 'Properties'} Found`;
    } else if (hasSearched && properties.length === 0) {
      return 'No Properties Found';
    } else {
      return 'All Properties';
    }
  };

  return (
    <div className="property-list-container">
      {/* Results header with dynamic count */}
      <div className="results-header">
        <h2 className="results-title">
          {getHeadingText()}
        </h2>
        
        {/* No results message with helpful tips */}
        {hasSearched && properties.length === 0 && (
          <div className="no-results-container">
            <p className="no-results-message">
              We couldn't find any properties matching your search criteria.
            </p>
            <p className="no-results-suggestion">
              Try adjusting your filters to see more results:
            </p>
            <ul className="no-results-tips">
              <li>Increase your price range</li>
              <li>Expand the number of bedrooms</li>
              <li>Try a different postcode area</li>
              <li>Adjust the date range</li>
            </ul>
          </div>
        )}
      </div>

      {/* Property grid - maps through filtered properties */}
      {properties.length > 0 && (
        <div className="property-grid">
          {properties.map(property => (
            <PropertyCard
              key={property.id}
              property={property}
              isFavourited={favourites.some(fav => fav.id === property.id)}
              onToggleFavourite={onToggleFavourite}
              onViewProperty={onViewProperty}
              onDragStart={onDragStart}
              draggable={true}
            />
          ))}
        </div>
      )}

      {/* Results summary footer */}
      {properties.length > 0 && (
        <div className="results-footer">
          <p className="results-summary">
            Showing {properties.length} {properties.length === 1 ? 'property' : 'properties'}
            {hasSearched && ' matching your search criteria'}
          </p>
        </div>
      )}
    </div>
  );
}

export default PropertyList;