import React, { Component } from "react";
import { Dimensions, View } from "react-native";

const Wrapper =
  typeof React.Fragment === "symbol" ? (
    React.Fragment
  ) : (
    <View style={{ display: "flex", flexGrow: 1 }} />
  );

const isPortrait = () => {
  const dim = Dimensions.get("screen");
  return dim.height >= dim.width;
};

export class OrientationChangeProvider extends Component {
  constructor() {
    super();

    this.state = {
      orientation: isPortrait() ? "portrait" : "landscape"
    };

    Dimensions.addEventListener("change", () => {
      this.setState({
        orientation: isPortrait() ? "portrait" : "landscape"
      });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.orientation !== nextState.orientation ||
      this.props.children !== nextProps.children
    );
  }

  render() {
    return <Wrapper key={Date.now()}>{this.props.children}</Wrapper>;
  }
}
