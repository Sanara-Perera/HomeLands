/**
 * FavouritesList.js
 * Favourites sidebar component - displays user's saved properties
 * Features:
 * - Drag-and-drop to add/remove favourites
 * - View property details from favourites
 * - Clear all favourites at once
 * - Persistent favourites list during session
 */


import React from 'react';
import { Heart, Trash2, X } from 'lucide-react';
import './FavouritesList.css';

function FavouritesList({ 
  favourites,
  onClearFavourites,
  onViewProperty,
  onDropToFavourites,
  onDropToRemove,
  onDragStart,
  onToggleFavourite
}) {

  /**
   * Handle drag over event - allows dropping
   * Prevents default to enable drop functionality
   */
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  /**
   * Handle drop into favourites area
   * Adds property to favourites if not already added
   */
  const handleDropToFavourites = (e) => {
    e.preventDefault();
    onDropToFavourites();
  };

  /**
   * Handle drop into remove zone
   * Removes property from favourites
   */
  const handleDropToRemove = (e) => {
    e.preventDefault();
    onDropToRemove();
  };

  /**
   * Handle drag start - stores property being dragged
   */
  const handleDragStart = (e, property) => {
    onDragStart(property);
    e.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      id="favourites"
      className="favourites-container"
      onDragOver={handleDragOver}
      onDrop={handleDropToFavourites}
    >
      {/* Header with title and clear button */}
      <div className="favourites-header">
        <h3 className="favourites-title">
          <Heart className="favourites-icon" />
          Favourites ({favourites.length})
        </h3>
        
        {/* Only show clear button if favourites exist */}
        {favourites.length > 0 && (
          <button
            onClick={onClearFavourites}
            className="clear-button"
            title="Clear all favourites"
            aria-label="Clear all favourites"
          >
            <Trash2 className="clear-icon" />
          </button>
        )}
      </div>

      {/* Instructions for drag-and-drop */}
      <div className="drop-instructions">
        Drag properties here or click the heart icon
      </div>

      {/* Scrollable list of favourite properties */}
      <div className="favourites-list">
        {favourites.length === 0 ? (
          // Empty state
          <p className="no-favourites-message">No favourites yet</p>
        ) : (
          // Map through favourites and display each
          favourites.map(property => (
            <div
              key={property.id}
              className="favourite-item"
              draggable
              onDragStart={(e) => handleDragStart(e, property)}
            >
              {/* Property thumbnail */}
              <img
                src={property.images?.[0] || '/images/placeholder.jpg'}
                alt={property.shortDesc}
                className="favourite-image"
              />
              
              {/* Property content */}
              <div className="favourite-content">
                <p className="favourite-price">
                  LKR{property.price.toLocaleString()}
                </p>
                <p className="favourite-desc">{property.shortDesc}</p>
                
                {/* Action buttons */}
                <div className="favourite-actions">
                  <button
                    onClick={() => onViewProperty(property)}
                    className="favourite-view-button"
                  >
                    View
                  </button>

                  {/* Remove from favourites button */}
                  <button
                    onClick={() => onToggleFavourite(property)}
                    className="favourite-remove-button"
                    title="Remove from favourites"
                    aria-label="Remove from favourites"
                  >
                    <X className="remove-icon" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Drop zone for removing favourites - only show if favourites exist */}
      {favourites.length > 0 && (
        <div
          className="remove-drop-zone"
          onDragOver={handleDragOver}
          onDrop={handleDropToRemove}
        >
          Drag here to remove
        </div>
      )}
    </div>
  );
}

export default FavouritesList;