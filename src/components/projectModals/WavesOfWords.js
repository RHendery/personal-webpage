import React, { Component } from "react";
import img from "../../images/01_waves_of_words.jpg";
import Modal from "../../layouts/Modal";

class WavesOfWords extends Component {
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
                  <img src={img} alt="Wave of Words" />
                </a>
              </figure>
              <figcaption className="title">
                Waves of Words
              </figcaption>
            </div>

            <Modal
              closeModal={this.toggleModal}
              modalState={this.state.modalState}
              title="Waves of Words"
              url="https://www.westernsydney.edu.au/dhrg/digital_humanities/featured/waves_of_words"
            >
              <figure className="image is-3by2">
                <img src={img} alt="Waves of Words" />
              </figure>
              <p>
                Waves of Words: Mapping and Modelling Australia's Asia-Pacific Ties" (2018-2021) is an ARC Discovery project that aims to
                determine the extent and nature of ancient contact relationships between first peoples of Australia and the Asia-Pacific region.
              </p>
            </Modal>
          </div>
      );
    }
  }

export default WavesOfWords;
