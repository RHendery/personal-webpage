import React, { Component } from "react";
import img from "../../images/03_AustKin.png";
import Modal from "../../layouts/Modal";

class AustKin extends Component {
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

              <figcaption className="title is-4">
              AustKin
              </figcaption>
              <figure className="image is-3by2">
                <a onClick={this.toggleModal} >
                  <img src={img} alt="Austkin" />
                </a>
              </figure>
            </div>

            <Modal
              closeModal={this.toggleModal}
              modalState={this.state.modalState}
              title="AustKin"
              url="http://austkin.net/"
            >
              <figure className="image is-3by2">
                <img src={img} alt="Austkin" />
              </figure>
              <p>
                AustKin: Tracing change in family and social organisation in Indigenous Australia (funded by two ARC Discovery projects 2009-2014)
                is a collaboration among many linguists and anthropologists to gather Aboriginal and Torres Strait Island language kinship terms
                together in one place in order to gain a clearer contintent-wide view of social organisation in Australia.
              </p>
            </Modal>
          </div>
      );
    }
  }

export default AustKin;
