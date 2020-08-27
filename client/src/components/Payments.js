import React, { Component } from "react";
import Stripeckeckout from "react-stripe-checkout";

class Payments extends Component {
  render() {
    return (
      <Stripeckeckout
        amount={500}
        token={(token) => console.log(token)}
        stripeKey={process.env.REACT.APP.STRIPE.KEY}
      />
    );
  }
}

export default Payments;
