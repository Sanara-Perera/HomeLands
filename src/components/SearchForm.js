import React, { useState } from 'react';
import { Search } from 'lucide-react';
import './SearchForm.css';

function SearchForm({ onSearch }) {
  
  const [searchCriteria, setSearchCriteria] = useState({
    type: '',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    dateAfter: '',
    dateBefore: '',
    postcode: ''
  });

  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchCriteria);
  };

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({
      ...searchCriteria,
      [name]: value
    });
  };

 
  const handleReset = () => {
    setSearchCriteria({
      type: '',
      minPrice: '',
      maxPrice: '',
      minBedrooms: '',
      maxBedrooms: '',
      dateAfter: '',
      dateBefore: '',
      postcode: ''
    });
   
    onSearch({
      type: '',
      minPrice: '',
      maxPrice: '',
      minBedrooms: '',
      maxBedrooms: '',
      dateAfter: '',
      dateBefore: '',
      postcode: ''
    });
  };

  return (
    <div className="search-form-container">
      <h2 className="search-form-title">
        <Search className="search-icon" aria-hidden="true" />
        <span className="typing-text">Search Properties</span>
      </h2>
      
      <form onSubmit={handleSubmit} className="search-form" role="search">
        <div className="form-grid">
         
          <div className="form-group">
            <label htmlFor="type" className="form-label">
              Property Type
            </label>
            <select
              id="type"
              name="type"
              value={searchCriteria.type}
              onChange={handleChange}
              className="form-control"
              aria-label="Select property type"
            >
              <option value="">Any</option>
              <option value="house">House</option>
              <option value="flat">Flat</option>
            </select>
          </div>

      
          <div className="form-group">
            <label htmlFor="minPrice" className="form-label">
              Min Price (LKR)
            </label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              value={searchCriteria.minPrice}
              onChange={handleChange}
              placeholder="e.g. 200000"
              min="0"
              step="1000"
              className="form-control"
              aria-label="Minimum price"
            />
          </div>

         
          <div className="form-group">
            <label htmlFor="maxPrice" className="form-label">
              Max Price (LKR)
            </label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              value={searchCriteria.maxPrice}
              onChange={handleChange}
              placeholder="e.g. 500000"
              min="0"
              step="1000"
              className="form-control"
              aria-label="Maximum price"
            />
          </div>

          
          <div className="form-group">
            <label htmlFor="minBedrooms" className="form-label">
              Min Bedrooms
            </label>
            <input
              type="number"
              id="minBedrooms"
              name="minBedrooms"
              value={searchCriteria.minBedrooms}
              onChange={handleChange}
              placeholder="e.g. 2"
              min="1"
              max="10"
              className="form-control"
              aria-label="Minimum bedrooms"
            />
          </div>

          
          <div className="form-group">
            <label htmlFor="maxBedrooms" className="form-label">
              Max Bedrooms
            </label>
            <input
              type="number"
              id="maxBedrooms"
              name="maxBedrooms"
              value={searchCriteria.maxBedrooms}
              onChange={handleChange}
              placeholder="e.g. 4"
              min="1"
              max="10"
              className="form-control"
              aria-label="Maximum bedrooms"
            />
          </div>

       
          <div className="form-group">
            <label htmlFor="postcode" className="form-label">
              Postcode Area
            </label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              value={searchCriteria.postcode}
              onChange={handleChange}
              placeholder="e.g. BR1, NW1"
              className="form-control"
              aria-label="Postcode area"
              maxLength="10"
            />
          </div>

          
          <div className="form-group">
            <label htmlFor="dateAfter" className="form-label">
              Date Added After
            </label>
            <input
              type="date"
              id="dateAfter"
              name="dateAfter"
              value={searchCriteria.dateAfter}
              onChange={handleChange}
              className="form-control"
              aria-label="Properties added after this date"
            />
          </div>

          
          <div className="form-group">
            <label htmlFor="dateBefore" className="form-label">
              Date Added Before
            </label>
            <input
              type="date"
              id="dateBefore"
              name="dateBefore"
              value={searchCriteria.dateBefore}
              onChange={handleChange}
              className="form-control"
              aria-label="Properties added before this date"
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="search-button">
            <Search className="button-icon" aria-hidden="true" />
            Search Properties
          </button>
          
          <button 
            type="button" 
            onClick={handleReset} 
            className="reset-button"
          >
            Clear Filters
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;