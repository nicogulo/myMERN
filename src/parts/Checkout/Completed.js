import React from 'react';
import Fade from 'react-reveal/fade';
import CompletedIlustration from 'assets/images/completed.jpg';

export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justif-content-center text-center">
          <div className="col-4">
            <img
              src={CompletedIlustration}
              alt="Completed Checkout Payment"
              className="img-fluid"
            />
            <p className="text-gray-500">
              We will inform you via email later once transaction has been
              accept
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
