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

  const handleDragStart = (e) => {
    if (draggable && onDragStart) {
      onDragStart(property);
      e.dataTransfer.effectAllowed = 'move';
    }
  };


  const handleFavouriteClick = () => {
    onToggleFavourite(property);
  };


  const handleViewClick = () => {
    onViewProperty(property);
  };

  
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

  
  return (
    <div
      className="property-card"
      draggable={draggable}
      onDragStart={handleDragStart}
    >
      
      <div className="property-card-image-container">
        <img
          src={property.images[0]}
          alt={property.shortDesc}
          className="property-card-image"
          loading="lazy"
        />
        
        <div className="property-type-badge">
          {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
        </div>
        
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

      
      <div className="property-card-content">
        
        <h3 className="property-price">
          LKR{property.price.toLocaleString()}
        </h3>
        
        
        <p className="property-description">
          {property.shortDesc}
        </p>

        
        <div className="property-features">
          <span className="property-feature" title="Property Type">
            <Home className="feature-icon" aria-hidden="true" />
            {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
          </span>
          <span className="property-feature" title="Bedrooms">
            <Bed className="feature-icon" aria-hidden="true" />
            {property.bedrooms} bed{property.bedrooms !== 1 ? 's' : ''}
          </span>
          <span className="property-feature" title="Postcode">
            <MapPin className="feature-icon" aria-hidden="true" />
            {property.postcode}
          </span>
        </div>

        
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