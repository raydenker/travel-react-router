import React from 'react';
import TrainingCards from '../components/Training'
import HeroImage from '../components/HeroImage'

function Training() {
  return (
    <div className="Training">
      <HeroImage heading='TRAINING.' text='Pre-Flight & In-Flight Training'/>
      <TrainingCards/>
    </div>
  );
}

export default Training;
