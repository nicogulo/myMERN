import React from 'react'

import ImageHero from 'assets/images/img-hero.jpg';
import ImageHero_ from 'assets/images/img-hero-frame.jpg';
import IconCities from 'assets/images/icons/icon-cities.svg';
import IconTraveler from 'assets/images/icons/icon-traveler.svg';
import IconTreasure from 'assets/images/icons/icon-treasure.svg';

import Button from 'elements/Button';

export default function Hero(props) {
function ShowMostPicked(){
  window.scrollTo({
    top: props.refMostPicked.current.offsetTop - 30,
    behavior: "smooth"
  });
}

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div class="col-auto pr-5" style={{ width: 423 }}>
          <h1 class="h2 font-weight-bold line-height-1 mb-3">
            Forget Busy work, <br/>
            Start Next Vacation
          </h1>
          <p class="mb-5 font-weight-light text-gray-500 w-75">
            We provide what you need to enjoy holiday with family, Time to make another memorable moments.
          </p>
          <Button className="btn px-5" hasShadow isPrimary onClick={ShowMostPicked}>
            Show Me Now
          </Button>

          <div className="row mt-5">
            <div class="col-auto" style={{marginRight: 50 }}>
              <img width="36" height="36" src={IconTraveler} alt={`${props.data.travelers} Travelers`}/>
              <h6 className="mt-3">
                {props.data.travelers}  <span class="text-gray-500 font-weight-light">
                  travelers
                </span>
              </h6>
            </div>

            <div class="col-auto" style={{marginRight: 50 }}>
              <img width="36" height="36" src={IconTreasure} alt={`${props.data.treasures} Treasures`}/>
              <h6 className="mt-3">
                {props.data.treasures}  <span class="text-gray-500 font-weight-light">
                  treasures
                </span>
              </h6>
            </div>

            <div class="col-auto" style={{marginRight: 50 }}>
              <img width="36" height="36" src={IconCities} alt={`${props.data.cities} Cities`}/>
              <h6 className="mt-3">
                {props.data.cities}  <span class="text-gray-500 font-weight-light">
                  cities
                </span>
              </h6>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}
