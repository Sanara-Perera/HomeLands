import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Home, Bed, MapPin, Calendar, Heart } from 'lucide-react';
import './PropertyDetails.css';

function PropertyDetails({ property, favourites, onAddToFavourites, onBack }) {
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  
  const [activeTab, setActiveTab] = useState('description');

  
  const isFavourited = favourites.some(fav => fav.id === property.id);

  
  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  
  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  
  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  
  const handleAddToFavourites = () => {
    onAddToFavourites(property);
  };

  return (
    <div className="property-details-page">
      
      <header className="property-details-header">
        <div className="header-content">
          <button onClick={onBack} className="back-button">
            ← Back to Search
          </button>
          <h1 className="property-title">{property.shortDesc}</h1>
          <p className="property-location">{property.location}</p>
        </div>
      </header>

      
      <div className="property-details-container">
        <div className="property-details-main">
          
          <div className="image-gallery">
            
            <div className="main-image-container">
              <img
                src={property.images[currentImageIndex]}
                alt={`Property ${currentImageIndex + 1}`}
                className="main-image"
              />
              
              
              <button
                onClick={prevImage}
                className="gallery-nav-button gallery-nav-prev"
                aria-label="Previous image"
              >
                <ChevronLeft className="nav-icon" />
              </button>
              <button
                onClick={nextImage}
                className="gallery-nav-button gallery-nav-next"
                aria-label="Next image"
              >
                <ChevronRight className="nav-icon" />
              </button>

              
              <div className="image-counter">
                {currentImageIndex + 1} / {property.images.length}
              </div>
            </div>

           
            <div className="thumbnail-gallery">
              {property.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  onClick={() => selectImage(idx)}
                  className={`thumbnail ${idx === currentImageIndex ? 'thumbnail-active' : ''}`}
                />
              ))}
            </div>
          </div>

          
          <div className="property-info-card">
            <div className="property-info-header">
              <h2 className="property-price-large">
                LKR{property.price.toLocaleString()}
              </h2>
              <button
                onClick={handleAddToFavourites}
                className="favourite-button-large"
                aria-label="Add to favourites"
              >
                <Heart
                  className={`heart-icon-large ${isFavourited ? 'heart-filled' : ''}`}
                />
              </button>
            </div>

            
            <div className="property-features-large">
              <span className="feature-item">
                <Home className="feature-icon-large" />
                {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
              </span>
              <span className="feature-item">
                <Bed className="feature-icon-large" />
                {property.bedrooms} Bedrooms
              </span>
              <span className="feature-item">
                <MapPin className="feature-icon-large" />
                {property.postcode}
              </span>
              <span className="feature-item">
                <Calendar className="feature-icon-large" />
                Added {new Date(property.dateAdded).toLocaleDateString()}
              </span>
            </div>

            
            <div className="tabs-container">
              <div className="tabs-header">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`tab-button ${activeTab === 'description' ? 'tab-active' : ''}`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('floorplan')}
                  className={`tab-button ${activeTab === 'floorplan' ? 'tab-active' : ''}`}
                >
                  Floor Plan
                </button>
                <button
                  onClick={() => setActiveTab('map')}
                  className={`tab-button ${activeTab === 'map' ? 'tab-active' : ''}`}
                >
                  Map
                </button>
              </div>

              
              <div className="tabs-content">
                {activeTab === 'description' && (
                  <div className="tab-panel">
                    <h3 className="tab-heading">Property Description</h3>
                    <p className="property-description-full">{property.longDesc}</p>
                  </div>
                )}

                {activeTab === 'floorplan' && (
                  <div className="tab-panel">
                    <h3 className="tab-heading">Floor Plan</h3>
                    <img
                      src={property.floorPlan}
                      alt="Floor plan"
                      className="floor-plan-image"
                    />
                  </div>
                )}

                {activeTab === 'map' && (
                  <div className="tab-panel">
                    <h3 className="tab-heading">Location Map</h3>
                    <div className="map-placeholder">
                      <MapPin className="map-icon" />
                      <p className="map-location">{property.location}</p>
                      <p className="map-postcode">Postcode: {property.postcode}</p>
                      <p className="map-note">
                        Interactive map would be displayed here using Google Maps API
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        
        <aside className="property-details-sidebar">
          <div className="contact-card">
            <h3 className="contact-heading">Contact Agent</h3>
            <div className="contact-buttons">
              <button className="contact-button contact-button-primary">
                Request Viewing
              </button>
              <button className="contact-button contact-button-secondary">
                Call Agent
              </button>
              <button className="contact-button contact-button-tertiary">
                Email Agent
              </button>
            </div>

            <div className="property-reference">
              <h4 className="reference-label">Property Reference</h4>
              <p className="reference-value">HL-{property.id.toString().padStart(6, '0')}</p>
              
              <h4 className="reference-label">Share Property</h4>
              <div className="share-buttons">
                <button className="share-button share-facebook">
                  Facebook
                </button>
                <button className="share-button share-twitter">
                  Twitter
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default PropertyDetails;