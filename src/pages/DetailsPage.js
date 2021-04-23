import React, { Component } from "react";
import Header from "parts/Header";
import PageDetailtTitle from "parts/PageDetailtTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";

import itemDetails from "json/itemDetails.json";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailtTitle
          breadcrumb={breadcrumb}
          data={itemDetails}
        ></PageDetailtTitle>
        <FeaturedImage data={itemDetails.imageUrls}></FeaturedImage>
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription data={itemDetails}></PageDetailDescription>
            </div>
            <div className="col-5">Booking Form</div>
          </div>
        </section>
      </>
    );
  }
}
