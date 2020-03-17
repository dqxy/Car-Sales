import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { carReducer } from './reducers/carReducer';

//import Title from './components/Title';
//import DragonList from './components/DragonList';


import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const store = createStore(
  carReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log('***1******', store.getState());

const App = () => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={store.getState().car} />
        <AddedFeatures car={store.getState().car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={store.getState().additionalFeatures} />
        <Total car={store.getState().car} additionalPrice={store.getState().additionalPrice} />
      </div>
    </div>
  );
};

export default App;
