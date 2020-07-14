import React from 'react';
import {connect} from 'react-redux'
function App() {
  return (
    <div className="App">
      <header className="App-header">
          Learn React
      </header>
      <button onclick={()=>{
        this.props.getName
      }}>点我获取名字</button>
      <p>{this.props.Aname}</p>
    </div>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    Aname: state.Aname
  };
};

const mapDispatchToProps = { getAName};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);