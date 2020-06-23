import React from "react";

import WavesOfWords from './projectModals/WavesOfWords';
import HowittAndFison from './projectModals/HowittAndFison';
import AustKin from './projectModals/AustKin';
import MPCE from './projectModals/MPCE';
import Glossopticon_VR from './projectModals/Glossopticon_VR';
import Barrawao from './projectModals/Barrawao';

export default function Publications() {
  return (
    <div>

      <h1 className="title is-1">Projects</h1>
      <br />

      <div className="columns">
        <div className="column">
          <WavesOfWords />
        </div>
        <div className="column is-offset-2">
          <HowittAndFison />
        </div>
      </div>
      <br />
      <br />

      <div className="columns">
        <div className="column">
          <AustKin />
        </div>
        <div className="column is-offset-2">
          <MPCE />
        </div>
      </div>
      <br />
      <br />

      <div className="columns">
        <div className="column">
          <Glossopticon_VR />
        </div>
        <div className="column is-offset-2">
          <Barrawao />
        </div>
      </div>

    </div>
  );
}
