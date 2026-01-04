/**
 * PropertyCard.js
 * Reusable property card component for displaying property information
 * Features:
 * - Two display modes: full card and compact card
 * - Drag-and-drop functionality for favourites
 * - Favourite toggle with heart icon
 * - Lazy loading images for performance
 * - Responsive design
 * 
 * Security: All property data is rendered via React JSX (automatic XSS protection)
 */

import React from 'react';
import { Home, Bed, MapPin, Heart } from 'lucide-react';
import './PropertyCard.css';

function PropertyCard({ 
  property, 
  isFavourited, 
  onToggleFavourite, 
  onViewProperty,
  onDragStart,
  draggable = false,
  compact = false
}) {
  
  //Handle drag start event - stores property data for drop operation
  const handleDragStart = (e) => {
    if (draggable && onDragStart) {
      onDragStart(property);
      e.dataTransfer.effectAllowed = 'move';
    }
  };

  //Toggle favourite status when heart icon is clicked
  const handleFavouriteClick = () => {
    onToggleFavourite(property);
  };

  //Navigate to property details page
  const handleViewClick = () => {
    onViewProperty(property);
  };

  // Render compact version for favourites sidebar
  if (compact) {
    return (
      <div
        className="property-card property-card-compact"
        draggable={draggable}
        onDragStart={handleDragStart}
      >
        <img
          src={property.images[0]}
          alt={property.shortDesc}
          className="property-card-image-compact"
        />
        <div className="property-card-content-compact">
          <p className="property-price-compact">
            LKR{property.price.toLocaleString()}
          </p>
          <p className="property-desc-compact">{property.shortDesc}</p>
        </div>
      </div>
    );
  }

  // Render full card for search results
  return (
    <div
      className="property-card"
      draggable={draggable}
      onDragStart={handleDragStart}
    >
      {/* Image section with overlays */}
      <div className="property-card-image-container">
        {/* Main property image - lazy loaded for performance */}
        <img
          src={property.images[0]}
          alt={property.shortDesc}
          className="property-card-image"
          loading="lazy"
        />
        
        {/* Property type badge (house/flat) */}
        <div className="property-type-badge">
          {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
        </div>
        
        {/* Favourite button - heart icon */}
        <button
          onClick={handleFavouriteClick}
          className="favourite-button"
          title={isFavourited ? "Already in favourites" : "Add to favourites"}
          aria-label={isFavourited ? "Already in favourites" : "Add to favourites"}
        >
          <Heart
            className={`heart-icon ${isFavourited ? 'heart-icon-filled' : ''}`}
          />
        </button>
      </div>

      {/* Content section */}
      <div className="property-card-content">
        {/* Price - formatted with thousand separators */}
        <h3 className="property-price">
          LKR{property.price.toLocaleString()}
        </h3>
        
        {/* Short description */}
        <p className="property-description">
          {property.shortDesc}
        </p>

        {/* Property features with icons */}
        <div className="property-features">
          {/* Property type */}
          <span className="property-feature" title="Property Type">
            <Home className="feature-icon" aria-hidden="true" />
            {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
          </span>
          {/* Number of bedrooms */}
          <span className="property-feature" title="Bedrooms">
            <Bed className="feature-icon" aria-hidden="true" />
            {property.bedrooms} bed{property.bedrooms !== 1 ? 's' : ''}
          </span>
          {/* Postcode */}
          <span className="property-feature" title="Postcode">
            <MapPin className="feature-icon" aria-hidden="true" />
            {property.postcode}
          </span>
        </div>

        {/* View details button */}
        <button
          onClick={handleViewClick}
          className="view-details-button"
          aria-label={`View details for ${property.shortDesc}`}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default PropertyCard;