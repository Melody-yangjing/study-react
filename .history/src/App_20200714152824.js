import React from 'react';
import { connect } from 'react-redux'
import { getAname } from './store/action'
class App extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          Learn React
        </header>
        <button onClick={() => {
          console.log(this.props)
          this.props.getAname()
        }}>点我获取名字</button>
        <p>{this.props.Aname}</p>
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    Aname: state.Aname
  };
};

const mapDispatchToProps = { getAname };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);