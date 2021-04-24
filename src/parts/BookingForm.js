import React, { Component } from "react";

import propTypes from "prop-types";
import Button from "elements/Button";
import { InpputNumber, InputDate } from "elements/Form";
import Date from "elements/Form/InputDate";

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

  // Function updateData menerima event target
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
    // kondisi pertama(date): jika tidak sama makan akan menjalankan perintah
    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      // mengganti state local diatas menjadi data baru
      this.setState({
        date: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }

    if (prevState.data.duration !== DeviceAcceleration.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.setDate.getDate() + +data.duration - 1)
      );
      this.setDate({
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
    return <div></div>;
  }
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBookinig: propTypes.func,
};
