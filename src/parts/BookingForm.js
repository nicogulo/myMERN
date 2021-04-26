import React, { Component } from "react";

import propTypes from "prop-types";
import Button from "elements/Button";
import { InputDate, InputNumber } from "elements/Form";

export default class BookingForm extends Component {
  // superprops untuk membaca bagian kiri
  // lalu buat state local yg isi Data: duration dan date

  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  // eslint-disable-next-line no-undef
  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;
    // kondisi pertama(date): jika Date tidak sama makan akan menjalankan perintah
    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      // mengganti state local diatas menjadi data baru
      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }

    // kondisi kedua(duration): jika duration tidak sama makan akan menjalankan perintah
    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      // dapat kan nilai dari startDate dari local state lalu ditambah dengan duration baru
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );

      // update state local
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }
  }
  render() {
    // menDistructor state dan props untuk menerima
    const { data } = this.state;
    // eslint-disable-next-line no-unused-vars
    const { itemDetails, startBooking } = this.props;

    return (
      <div className="card bordered" style={{ padding: "60px 80px" }}>
        <h1 className="mb-3">Start Booking</h1>
        <h5 className="h2 text-teal mb-4">
          ${itemDetails.price}{" "}
          <span className="text-gray-500 font-weight-light">
            per {itemDetails.unit}
          </span>
        </h5>
        <label htmlFor="duration">How long you will stay</label>
        <InputNumber
          max={30}
          suffix={" Night"}
          isSuffixPlural
          onChange={this.updateData}
          name={"duration"}
          value={data.duration}
        />
        <label htmlFor="date">Pick a date</label>
        <InputDate onChange={this.updateData} name="date" value={data.date} />

        <h6
          className="text-gray-500 font-weight-light"
          style={{ marginBottom: 40 }}
        >
          You will pay{" "}
          <span className="text-gray-900">
            ${itemDetails.price * data.duration} USD
          </span>{" "}
          per{" "}
          <span className="text-gray-900">
            {data.duration} {itemDetails.unit}
          </span>
        </h6>
        <Button
          className="btn"
          hasShadow
          isPrimary
          isBlock
          onClick={this.startBooking}
        >
          Continue to Book
        </Button>
      </div>
    );
  }
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};
