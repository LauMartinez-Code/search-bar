import React, { useState } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

const App = () => {

  const [images, setImages] = useState([]);

  const onSearchBarSubmit = async term => {
    
    try {
      const response = await unsplash.get('/search/photos', {
        params: { query: term }
      });
  
      setImages(response.data.results);
      
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <div className="ui container">
      <SearchBar onSearchBarSubmit={onSearchBarSubmit}/>
      <ImageList images={images} />
    </div>
  );
};

export default App; 
