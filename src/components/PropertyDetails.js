/**
 * PropertyDetails.js
 * Detailed property page with image gallery, tabs, and contact options
 * Features:
 * - Image gallery with thumbnail navigation
 * - Tabbed content (Description, Floor Plan, Map)
 * - Favourite toggle
 * - Contact sidebar with CTA buttons
 * - Back to search navigation
 * 
 * Security: All content rendered via React JSX (automatic XSS protection)
 */

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Home, Bed, MapPin, Calendar, Heart } from 'lucide-react';
import './PropertyDetails.css';

function PropertyDetails({ property, favourites, onToggleFavourite, onBack }) {
  
  // Image gallery state - tracks which image is currently displayed
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Tab state - tracks which tab content is visible
  const [activeTab, setActiveTab] = useState('description');

  // Check if this property is in favourites
  const isFavourited = favourites.some(fav => fav.id === property.id);

  /**
   * Navigate to next image in gallery
   * Loops back to first image when reaching the end
   */
  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  /**
   * Navigate to previous image in gallery
   * Loops to last image when at the beginning
   */
  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  
  //Jump to specific image by clicking thumbnail
  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  //Toggle favourite status of current property
  const handleFavouriteClick = () => {
    onToggleFavourite(property);
  };

  return (
    <div className="property-details-page">
      {/* Header with back button and property title */}
      <header className="property-details-header">
        <div className="header-content">
          <button onClick={onBack} className="back-button">
            ← Back to Search
          </button>
          <h1 className="property-title">{property.shortDesc}</h1>
          <p className="property-location">{property.location}</p>
        </div>
      </header>

      {/* Main content grid - property details and sidebar */}
      <div className="property-details-container">
        <div className="property-details-main">
          
          <div className="image-gallery">
            
            <div className="main-image-container">
              <img
                src={property.images[currentImageIndex]}
                alt={`Property ${currentImageIndex + 1}`}
                className="main-image"
              />
              
              {/* Previous image button */}
              <button
                onClick={prevImage}
                className="gallery-nav-button gallery-nav-prev"
                aria-label="Previous image"
              >
                <ChevronLeft className="nav-icon" />
              </button>
              {/* Next image button */}
              <button
                onClick={nextImage}
                className="gallery-nav-button gallery-nav-next"
                aria-label="Next image"
              >
                <ChevronRight className="nav-icon" />
              </button>

              {/* Image counter (1 / 8) */}
              <div className="image-counter">
                {currentImageIndex + 1} / {property.images.length}
              </div>
            </div>

            {/* Thumbnail grid - click to change main image */}
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

          {/* Property Information Card */}
          <div className="property-info-card">
            <div className="property-info-header">
              <h2 className="property-price-large">
                LKR{property.price.toLocaleString()}
              </h2>

              {/* Favourite button */}
              <button
                onClick={handleFavouriteClick}
                className="favourite-button-large"
                title={isFavourited ? "Already in favourites" : "Add to favourites"}
                aria-label={isFavourited ? "Already in favourites" : "Add to favourites"}
                >
                  <Heart
                    className={`heart-icon-large ${isFavourited ? 'heart-icon-filled' : ''}`}
              />
              </button>
            </div>

            {/* Property features with icons */}
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

            {/* Tabbed Content Section */}
            <div className="tabs-container">
              {/* Tab headers */}
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

              {/* Tab content - conditional rendering based on active tab */}
              <div className="tabs-content">
                {/* Description tab */}
                {activeTab === 'description' && (
                  <div className="tab-panel">
                    <h3 className="tab-heading">Property Description</h3>
                    <p className="property-description-full">{property.longDesc}</p>
                  </div>
                )}

                {/* Floor plan tab */}
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


                {/* Map tab - placeholder for Google Maps integration */}
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

        {/* Sidebar - Contact Card */}
        <aside className="property-details-sidebar">
          <div className="contact-card">
            <h3 className="contact-heading">Contact Agent</h3>
            
            {/* Call-to-action buttons */}
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

            {/* Property reference and sharing */}
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