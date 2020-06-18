import React from "react";

import ProjectOne from './projectModals/ProjectOne';
import ProjectTwo from './projectModals/ProjectTwo';

export default function Publications() {
  return (
    <div className="container">
      <h1 className="title is-1">Projects</h1>
      <br />

      <div class="columns">
        <div class="column is-5">
          <ProjectOne />
        </div>
        <div class="column is-offset-2">
          <ProjectTwo />
        </div>
      </div>

      <br />
      <br />

      <div class="columns">
        <div class="column is-5">
          <ProjectOne />
        </div>
        <div class="column is-offset-2">
          <ProjectTwo />
        </div>
      </div>
    </div>
  );
}
