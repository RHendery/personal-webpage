import React, { Component } from "react";
import img from "../../images/02_Howitt_and_Fison.png";
import Modal from "../../layouts/Modal";

class HowittAndFison extends Component {
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

              <figcaption className="title">
                Howitt and Fison
              </figcaption>
              <figure className="image is-3by2">
                <a onClick={this.toggleModal} >
                  <img src={img} alt="Howitt and Fison" />
                </a>
              </figure>
            </div>

            <Modal
              closeModal={this.toggleModal}
              modalState={this.state.modalState}
              title="Howitt and Fison"
              url="http://howittandfison.org/"
            >
              <figure className="image is-3by2">
                <img src={img} alt="Howitt and Fison" />
              </figure>
              <p>
                Howitt & Fison's Archive. This ARC Linkage Project (led by Helen Gardner) is a collaborative effort to bring various
                stakeholders and communities together to crowdsource the digitisation and interpretation of materials gathered by
                Gippsland magistrate A. W. Howitt and Methodist missionary Lorimer Fison over 100 years ago and to return these to
                the relevant communities.
              </p>
            </Modal>
          </div>
      );
    }
  }

export default HowittAndFison;
