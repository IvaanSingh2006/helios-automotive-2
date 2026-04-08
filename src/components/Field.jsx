import React from "react";
class FieldClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          value={this.state.value}
          onChange={this.handleChange}
        />
        <p>You typed: {this.state.value}</p>
      </div>
    );
  }
}

export default FieldClass;