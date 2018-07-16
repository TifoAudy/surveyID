import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'semantic-ui-react';
import * as actions from '../action/index';
import { connect } from 'react-redux';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="SURVEY.ID"
        description= "Get your credits now"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <Button primary color="purple">Add Credits</Button>
      </StripeCheckout>
    )
  };
}

export default connect(null, actions )(Payments);
