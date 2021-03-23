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
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy work, <br/>
            Start Next Vacation
          </h1>
          <p className="mb-4 font-weight-light text-gray-500 w-75" style={{lineHeight:"170%"}}>
            We provide what you need to enjoy holiday with family, Time to make another memorable moments.
          </p>
          <Button className="btn px-5" hasShadow isPrimary onClick={ShowMostPicked}>
            Show Me Now
          </Button>

          <div className="row" style={{marginTop: 80}}>
            <div className="col-auto" style={{marginRight: 10 }}>
              <img width="36" height="36" src={IconTraveler} alt={`${props.data.travelers} Travelers`}/>
              <h6 className="mt-3">
<<<<<<< Updated upstream
                {props.data.travelers}  <span class="text-gray-500 font-weight-light">
                  travelers
=======
                {props.data.travelers} {" "} <span className="text-gray-500 font-weight-light">
                  Travelers
>>>>>>> Stashed changes
                </span>
              </h6>
            </div>

            <div className="col-auto" style={{marginRight: 10 }}>
              <img width="36" height="36" src={IconTreasure} alt={`${props.data.treasures} Treasures`}/>
              <h6 className="mt-3">
<<<<<<< Updated upstream
                {props.data.treasures}  <span class="text-gray-500 font-weight-light">
                  treasures
=======
                {props.data.treasures} {" "} <span className="text-gray-500 font-weight-light">
                  Treasures
>>>>>>> Stashed changes
                </span>
              </h6>
            </div>

            <div className="col-auto" style={{marginRight: 10 }}>
              <img width="36" height="36" src={IconCities} alt={`${props.data.cities} Cities`}/>
              <h6 className="mt-3">
<<<<<<< Updated upstream
                {props.data.cities}  <span class="text-gray-500 font-weight-light">
                  cities
=======
                {props.data.cities} {" "} <span className="text-gray-500 font-weight-light">
                  Cities
>>>>>>> Stashed changes
                </span>
              </h6>
            </div>    
          </div>
        </div>

        <div className="col-6 pl-5">
            <div style={{ width: 520, height: 410 }}>
              <img
                src={ImageHero}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
              <img
                src={ImageHero_}
                alt="Room with couches frame"
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
        </div>
    </section>
  )
}
