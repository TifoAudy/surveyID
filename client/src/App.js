import React, { Component } from 'react';
import Home from './pages/Home';
import { connect } from 'react-redux';
import * as actions from './action';
import { Dimmer, Loader } from 'semantic-ui-react';

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  };

  renderContent() {
    const { auth } = this.props;
    switch(auth) {
      case null:
        return (
          <Dimmer inverted active>
            <Loader inverted> Loading </Loader>
          </Dimmer>
        )
      default:
        return <Home loggedIn = {auth?true:false} />
    }
  }

  render(){
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  };
};

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps, actions)(App);