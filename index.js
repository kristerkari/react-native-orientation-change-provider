import React, { Component } from "react";
import { Dimensions, View } from "react-native";

const Wrapper = React.Fragment || View;

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
    return this.state.orientation !== nextState.orientation;
  }
  render() {
    return <Wrapper key={Date.now()}>{this.props.children}</Wrapper>;
  }
}
