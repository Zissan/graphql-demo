import React, { useState } from "react";
import PropTypes from "prop-types";
import ChannelOptions from "./ChannelOptions";

const ManageCartoon = props => {
  const [cartoon, setCartoon] = useState({});

  const handleChange = ({ target }) => {
    setCartoon({ ...cartoon, [target.name]: target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(cartoon);
  };

  return (
    <div className="container">
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
              />
              <label for="name">Cartoon</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                name="genre"
                id="genre"
                onChange={handleChange}
              />
              <label for="genre">Genre</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <ChannelOptions onChange={handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <button
                className="btn-floating btn-large waves-effect waves-light red"
                type="submit"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

ManageCartoon.propTypes = {};

export default ManageCartoon;
