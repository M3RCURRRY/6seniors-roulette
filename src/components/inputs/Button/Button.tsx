import React from "react";

type ButtonProps = {
  value: string;
  onClick: () => void;
}

class Button extends React.Component<ButtonProps> {
  render(): React.ReactNode {
      return (
        <button onClick={this.props.onClick}>{this.props.value}</button>
      )
  }
}

export default Button;