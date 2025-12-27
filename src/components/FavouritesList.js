import React from 'react';
import { Heart, Trash2, X } from 'lucide-react';
import './FavouritesList.css';

function FavouritesList({ 
  favourites, 
  onRemoveFromFavourites, 
  onClearFavourites,
  onViewProperty,
  onDropToFavourites,
  onDropToRemove,
  onDragStart
}) {

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

 
  const handleDropToFavourites = (e) => {
    e.preventDefault();
    onDropToFavourites();
  };

 
  const handleDropToRemove = (e) => {
    e.preventDefault();
    onDropToRemove();
  };


  const handleDragStart = (e, property) => {
    onDragStart(property);
    e.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className="favourites-container"
      onDragOver={handleDragOver}
      onDrop={handleDropToFavourites}
    >
      
      <div className="favourites-header">
        <h3 className="favourites-title">
          <Heart className="favourites-icon" />
          Favourites ({favourites.length})
        </h3>
        
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

      
      <div className="drop-instructions">
        Drag properties here or click the heart icon
      </div>

      
      <div className="favourites-list">
        {favourites.length === 0 ? (
          <p className="no-favourites-message">No favourites yet</p>
        ) : (
          favourites.map(property => (
            <div
              key={property.id}
              className="favourite-item"
              draggable
              onDragStart={(e) => handleDragStart(e, property)}
            >
              <img
                src={property.images[0]}
                alt={property.shortDesc}
                className="favourite-image"
              />
              
              <div className="favourite-content">
                <p className="favourite-price">
                  £{property.price.toLocaleString()}
                </p>
                <p className="favourite-desc">{property.shortDesc}</p>
                
                <div className="favourite-actions">
                  <button
                    onClick={() => onViewProperty(property)}
                    className="favourite-view-button"
                  >
                    View
                  </button>
                  <button
                    onClick={() => onRemoveFromFavourites(property.id)}
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