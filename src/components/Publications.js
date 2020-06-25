import React, { useState } from 'react';

import Books from './publications/Books';
import Papers from './publications/Papers';

export default function Publications() {
  const [page, setPage] = useState('books')

  return (
    <div>
      <h1 className="title is-1">Publications</h1>

      <div className="columns">
        <div className="column is-4">
          { page === 'books' ?
            <button className="button is-success is-medium is-fullwidth">
              Viewing Books
            </button>
            :
            <button className="button is-link is-medium is-fullwidth" onClick={() => setPage('books')}>
              Show Me Books
            </button>
          }
        </div>
        <div className="column is-offset-4">
          { page === 'papers' ?
            <button className="button is-success is-medium is-fullwidth">
              Viewing Papers
            </button>
            :
            <button className="button is-link is-medium is-fullwidth" onClick={() => setPage('papers')}>
              Show Me Papers
            </button>
          }
        </div>
      </div>

      <div className="columns is-centered">
        <div className="column">
          { page === 'books' && <Books /> }
          { page === 'papers' && <Papers /> }
        </div>
      </div>
    </div>
  )
}
