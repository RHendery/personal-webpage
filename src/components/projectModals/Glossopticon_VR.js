import React, { Component } from "react";
import img from "../../images/05_Glossopticon_VR.jpg";
import Modal from "../../layouts/Modal";

class Glossopticon_VR extends Component {
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

            <figure className="image is-3by2">
              <a onClick={this.toggleModal} >
                <img src={img} alt="Glossopticon VR" />
              </a>
            </figure>
              <figcaption className="title">
                Glossopticon VR
              </figcaption>
            </div>

            <Modal
              closeModal={this.toggleModal}
              modalState={this.state.modalState}
              title="Glossopticon VR"
              url="https://glossopticon.com/exhibition.html"
            >
              <figure className="image is-3by2">
                <img src={img} alt="Glossopticon VR" />
              </figure>
              <p>
                Glossopticon (2017) is an interactive virtual reality fly-through of the Pacific, created in collaboration with
                Andrew Burrell and Nick Thieberger, in which the user can explore materials from the OLAC and PARADISEC archives.
              </p>
            </Modal>
          </div>
      );
    }
  }

export default Glossopticon_VR;
