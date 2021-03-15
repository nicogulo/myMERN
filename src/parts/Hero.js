import React from 'react'

import ImageHero from 'assets/images/img-hero.jpg';
import ImageHero_ from 'assets/images/img-hero-frame.jpg';
import IconCities from 'assets/images/icons/icon-cities.svg';
import IconTraveler from 'assets/images/icons/icon-traveler.svg';
import IconTreasure from 'assets/images/icons/icon-treasure.svg';

import Button from 'elements/Button';

export default function Hero(props) {
function ShowMostPicked(){
  window.scrollTo()
}

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div class="col-auto pr-5" style={{ width: 422 }}>
          <h1 class="h2 font-weight-bold line-height-1 mb-3">
            Forget Busy work, <br/>
            Start Next Vacation
          </h1>
          <p class="mb-5 font-weight-light text-gray-500 w-75">
            We provide what you need to enjoy holiday with family, Time to make another memorable moments.
          </p>
          <Button class="btn px-5" hasShadow isPrimary onClick={ShowMostPicked}>
            Show Me Now
          </Button>
        </div>
      </div>
    </section>
  )
}
