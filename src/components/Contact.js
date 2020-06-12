import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../Context";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

class Contact extends Component {
  state = {
    showInfo: false,
  };
  onDel = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showInfo } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <div className="d-flex ">
                <h4>{name}</h4>
                <i
                  onClick={() =>
                    this.setState({ showInfo: !this.state.showInfo })
                  }
                  className="pl-3 pointer"
                >
                  {showInfo ? <FaMinus /> : <FaPlus />}
                </i>
                <i
                  onClick={this.onDel.bind(this, id, dispatch)}
                  className="ml-auto pointer"
                >
                  <FaTimes />
                </i>
              </div>
              {showInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.prototypes = {
  contact: PropTypes.object.isRequired,
};
export default Contact;
