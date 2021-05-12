import React, { useState } from "react";
import propTypes from "prop-types";

export default function Stepper(props) {
  const { steps, initialStep } = props;
  const stepsKeys = Object.keys(steps);

  // step lokal
  const [CurrentStep, setCurrentStep] = useState(
    stepsKeys.indexOf(initialStep) > -1 ? initialStep : stepsKeys[0]
  );
  // hasil dari step 
  const totalStep = stepsKeys.lenght;
  const indexStep = stepsKeys.indexOf(CurrentStep);
  
  function prevStep() {
    if (+indexStep > 0) setCurrentStep(stepsKeys[indexStep - 1]);
  }
  function nextStep() {
    if (+indexStep < totalStep) setCurrentStep(stepsKeys[indexStep + 1]);
  }

  return <>{props.childer(prevStep, nextStep, CurrentStep, steps)}</>;
}

Stepper.propTypes = {
  data: propTypes.object,
  initialStep: propTypes.string,
};
