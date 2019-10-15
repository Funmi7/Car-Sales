import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {connect} from 'react-redux';
import * as actionCreators from './state/actionCreators';

export const App = (props) => {
  const {state, buyItem, removeFeature} = props;

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car}
        removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store}
        buyItem={buyItem} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

export default connect(
  state => state,
  actionCreators,
)(App)

