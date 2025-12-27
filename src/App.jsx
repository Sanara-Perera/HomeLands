import React, { useState } from 'react';
import SearchPage from './components/SearchPage';
import PropertyDetails from './components/PropertyDetails';
import { propertiesData } from './data/properties';
import './App.css';
import Footer from './components/Footer';



function App() {
  
  const [view, setView] = useState('search'); 
  const [selectedProperty, setSelectedProperty] = useState(null);
  
  
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (property) => {
  setFavourites(prev =>
    prev.some(f => f.id === property.id)
      ? prev.filter(f => f.id !== property.id)
      : [...prev, property]
  );
};


  const clearFavourites = () => {
    setFavourites([]);
  };

  
  const viewPropertyDetails = (property) => {
    setSelectedProperty(property);
    setView('property');
  };

  
  const backToSearch = () => {
    setView('search');
    setSelectedProperty(null);
  };

  return (
    <div className="app">
      
      {view === 'search' && (
        <SearchPage
          properties={propertiesData}
          favourites={favourites}
          onToggleFavourite={toggleFavourite}
          onClearFavourites={clearFavourites}
          onViewProperty={viewPropertyDetails}
        />
      )}

      {view === 'property' && selectedProperty && (
        <PropertyDetails
          property={selectedProperty}
          favourites={favourites}
          onToggleFavourite={toggleFavourite}
          onBack={backToSearch}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;