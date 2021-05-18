import React, { Component } from 'react';
import Header from 'parts/Header';
import Fade from 'react-reveal/fade';
import Button from 'elements/Button';
import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from 'elements/Stepper';
import BookingInformation from 'parts/Checkout/BookingInformation';
import Payment from 'parts/Checkout/Payment';
import Completed from 'parts/Checkout/Completed';

import ItemDetails from 'json/itemDetails.json';

export default class Checkout extends Component {
  state = {
    data: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      proofPayment: '',
      bankName: '',
      bankHolder: '',
    },
  };

  // untuk merubah state lokal
  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.taget.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const { data } = this.state;
    const checkout = {
      duration: 3,
    };
    const steps = {
      bookingInformation: {
        title: 'Booking Information',
        decription: ' Please fill up the blank field below',
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            ItemDetails={ItemDetails}
            onChange={this.onChange}
          />
        ),
      },

      payment: {
        title: 'Payment',
        description: 'kindly follow the instructions below',
        content: (
          <Payment
            data={data}
            ItemDetails={ItemDetails}
            checkout={checkout}
            onChange={this.onChange}
          />
        ),
      },

      completed: {
        title: 'Yay!, Completed',
        decription: null,
        content: <Completed />,
      },
    };
    return (
      <>
        <Header isCentered />

        <Stepper steps={steps}/>
          {(
            prevStep, nextStep, CurrentStep, steps
          )}
        </Stepper>
      </>
    );
  }
}
