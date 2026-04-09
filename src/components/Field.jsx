import React from "react";
import PropTypes from "prop-types";

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ""
    };
  }

  handleChange = (e) => {
    const newValue = e.target.value;
    this.setState({ value: newValue });
    this.props.onChange(newValue);
  };

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

Field.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Field;