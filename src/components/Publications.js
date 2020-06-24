import React from 'react';
import Books from './books/Books';
import Papers from './papers/Papers';

export default function Publications() {
  return (
    <div>
      <h1 className="title is-1">Books and Publications</h1>
      <br />

      <div className="columns">
        <div className="column">
          <h5 className="title is-5">Books</h5>
          <Books />
        </div>
        <div className="column is-offset-2">
          <h5 className="title is-5">Papers & Publications</h5>
          <Papers />
        </div>
      </div>
    </div>
  )
}
