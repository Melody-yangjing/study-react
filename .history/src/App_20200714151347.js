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

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = { increment, decrement, reset };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);