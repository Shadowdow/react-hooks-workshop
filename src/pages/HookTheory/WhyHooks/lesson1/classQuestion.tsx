import React from "react";
import { Button } from "antd";

class ClassQuestion extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  handleClick = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        this.setState({ number: this.state.number + 1 });
        console.log(this.state.number);
      }, 1000);
    }
  };

  render() {
    return (
      <div className={"ml-16"}>
        <p>这个数是：{this.state.number}</p>
        <Button onClick={this.handleClick}>Click me</Button>
      </div>
    );
  }
}

export default ClassQuestion;
