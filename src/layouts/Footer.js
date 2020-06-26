import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p className="has-text-centered">
          This website and it's contents belong to Rachel Hendery. It was made by Red Hendery.
          You can contact him <a target="blank" href="https://redhendery.herokuapp.com/contact">here</a>.
        </p>
      </div>
    </footer>
  )
}
