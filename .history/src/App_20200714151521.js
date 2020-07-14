import React from 'react';
import {connect} from 'react-redux'
function App() {
  return (
    <div className="App">
      <header className="App-header">
          Learn React
      </header>
      <button>点我获取名字</button>
      <p>{this.props.}</p>
    </div>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    Aname: state.Aname
  };
};

const mapDispatchToProps = { getName};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);