import React from 'react';

const Modal = ({ children, closeModal, modalState, title, url }) => {
  if(!modalState) {
    return null;
  }

  return(
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title has-text-centered">{title}</p>
          <button className="delete" onClick={closeModal} />
        </header>
        <section className="modal-card-body has-text-justified">
          <div className="content">
            {children}
          </div>
        </section>
        <footer className="modal-card-foot is-centered">
          <p>
            <a href={url} target="blank">View the full {title} project here</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Modal;
