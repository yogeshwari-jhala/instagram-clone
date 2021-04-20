import React, { Component } from "react";
import "../Input.style.scss";

export class TextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: (props.locked && props.active) || false,
      value: props.value || "",
      label: props.label || "Label",
      type: props.type || "text",
      key: props.key,
    };
    this.changeValue = this.changeValue.bind(this);
  }

  // on value change
  changeValue(event) {
    const value = event.target.value;
    this.props.onChange(value);
  }

  render() {
    const { active, label, type, key } = this.state;
    const { locked, value } = this.props;
    const fieldClassName = `field ${
      (locked ? active : active || value) && "active"
    } ${locked && !active && "locked"}`;

    return (
      <div className={fieldClassName}>
        <input
          id={key}
          name={key}
          type={type}
          value={value}
          placeholder={label}
          onChange={this.changeValue}
          onFocus={() => !locked && this.setState({ active: true })}
          onBlur={() => !locked && this.setState({ active: false })}
          
        />
        <label>{label}</label>
      </div>
    );
  }
}
