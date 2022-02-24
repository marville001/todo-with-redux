import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddProductForm from './components/AddProductForm';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import TodosList from './components/TodosList';
import { getTodosAction } from './redux/actions/todosActions';

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodosAction())
  }, [dispatch])
  
  return (
      <div>
          <Header/>
          <AddProductForm />
          <ProductListing />
          <TodosList />
      </div>
  );
};

export default App;
