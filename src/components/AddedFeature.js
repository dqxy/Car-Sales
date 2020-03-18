import React from "react";
import { connect } from "react-redux";
import { removeFeature, updateTotal } from "../actions/carActions";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={e => {
          e.preventDefault();
          props.removeFeature(props.feature.id);
          props.updateTotal();
        }}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeature, updateTotal })(AddedFeature);