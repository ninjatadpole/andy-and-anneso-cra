import React from "react";
import classnames from "classnames";

import Blobs from "../blobs";

import "./fairy-light.scss";

class FairyLight extends React.Component {
  state = { switch: false };
  colours = ["gold", "purple"];

  // componentDidMount() {
  //   window.setInterval(() => {
  //     this.setState({ switch: !this.state.switch });
  //   }, 500);
  // }

  render() {
    const { className, children, gold, purple } = this.props;

    let newGold, newPurple;
    if (!this.state.switch) {
      [newGold, newPurple] = [gold, purple];
    } else {
      [newGold, newPurple] = [purple, gold];
    }

    return (
      <div className={classnames("fairy-light", className)}>
        <Blobs
          paper={[1]}
          className="light"
          gold={newGold}
          purple={newPurple}
        />
        {children}
      </div>
    );
  }
}
export default FairyLight;
