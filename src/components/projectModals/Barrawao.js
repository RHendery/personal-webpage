import React, { Component } from "react";
import img from "../../images/06_Barrawao.png";
import Modal from "../../layouts/Modal";

class Barrawao extends Component {
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
                Barrawao 2019
              </figcaption>
              <figure className="image is-3by2">
                <a onClick={this.toggleModal} >
                  <img src={img} alt="Barrawao" />
                </a>
              </figure>
            </div>

            <Modal
              closeModal={this.toggleModal}
              modalState={this.state.modalState}
              title="Barrawao"
              url="http://barrawao.net/"
            >
              <figure className="image is-3by2">
                <img src={img} alt="Barrawao" />
              </figure>
              <p>
                Barrawao (2019) is a virtual reality experience created in collaboration with Andrew Burrell,
                Danièle Hromek, Shannon Foster, and Louisa King. The aim is to bring about an understanding of the deep connection between
                Language and Country in an embodied and experiential manner
              </p>
            </Modal>
          </div>
      );
    }
  }

export default Barrawao;
