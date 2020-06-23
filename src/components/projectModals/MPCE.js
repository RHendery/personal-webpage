import React, { Component } from "react";
import img from "../../images/04_MPCE.jpg";
import Modal from "../../layouts/Modal";

class ProjectTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false
    };

      this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
      this.setState((prev, props) => {
        const newState = !prev.modalState;

        return { modalState: newState };
      });
    }

    render() {
      return(
          <div className="container">
            <div className="has-text-centered">

              <figcaption className="title is-5">
                Mapping Print; Charting Enlightenment
              </figcaption>
              <figure className="image is-3by2">
                <a onClick={this.toggleModal} >
                  <img src={img} alt="Mapping Print; Charting Enlightenment" />
                </a>
              </figure>
            </div>

            <Modal
              closeModal={this.toggleModal}
              modalState={this.state.modalState}
              title="Mapping Print; Charting Enlightenment"
              url="http://fbtee.uws.edu.au/mpce/"
            >
              <figure className="image is-3by2">
                <img src={img} alt="Mapping Print; Charting Enlightenment" />
              </figure>
              <p>
                Mapping Print; Charting Enlightenment is an ARC Discovery project led by Simon Burrows, which aims to reinterpret
                eighteenth-century culture through historical bibliometrics, digital, spatial and textual analysis.
              </p>
            </Modal>
          </div>
      );
    }
  }

export default ProjectTwo;
