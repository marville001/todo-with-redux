import React from 'react';
import AddProductForm from './components/AddProductForm';
import Header from './components/Header';
import ProductListing from './components/ProductListing';

const App = () => {
  return (
      <div>
          <Header/>
          <AddProductForm />
          <ProductListing />
      </div>
  );
};

export default App;
