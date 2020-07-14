import React from 'react';
import {connect} from 'react-redux'
function App() {
  return (
    <div className="App">
      <header className="App-header">
          Learn React
      </header>
    </div>
  );
}

export default connect(
  state => ({
      Aname:state.getAname
  }),
  {addNameCreater,addAgeCreater,addNameAsync}
)(App)
