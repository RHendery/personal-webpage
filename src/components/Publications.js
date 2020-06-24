import React from 'react';
import Books from './publications/Books';
import Papers from './publications/Papers';

export default function Publications() {
  return (
    <div>
      <h1 className="title is-1">Publications</h1>
      <br />

      <div className="columns is-centered">
        <div className="column">
          <Books />
          <Papers />
        </div>
      </div>
    </div>
  )
}
