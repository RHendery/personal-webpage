import React, { Component } from "react";
import mavis from "../../images/mavis.jpg";
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
            <div className="has-text-centered content">

              <a onClick={this.toggleModal} >
                <img src={mavis} alt="Mavis" style={{ maxHeight: '200px' }} />
              </a>
              <figcaption>
                Project Name
              </figcaption>
            </div>

            <Modal
              closeModal={this.toggleModal}
              modalState={this.state.modalState}
              title="Project Name"
            >
              <img src={mavis} alt="Mavis" style={{maxHeight: '200px' }} />
              <p>
                Some stuff about the project.
              </p>
              <p>
                More stuff about the project.
              </p>
            </Modal>
          </div>
      );
    }
  }

export default ProjectTwo;
