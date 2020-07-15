import React from 'react';
import { connect } from 'react-redux'
import { getAname } from './store/action'
class App extends React.Component {

  componentDidMount() {
    console.log(this.props)
  }

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
        <br/>
        <span>{this.props.name}</span>----<span>{this.props.age}</span>
        <p>{this.props.aname}</p>
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    name: state.name,
    age: state.age,
    aname: state.aname
  };
};

const mapDispatchToProps = { getAname };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);