import * as React from "react";

class Detail extends React.Component<{}, { component }> {
  state = {
    component: null
  };
  constructor(props) {
    super(props);
    this.loadDynamic = this.loadDynamic.bind(this);
  }

  loadDynamic() {
    import("./DynComponent").then(Component => {
      this.setState({ component: Component.default });
    });
  }

  render() {
    const DynComponent = this.state.component;
    return (
      <div>
        Hello from detail component
        <div>
          <button onClick={this.loadDynamic}>Load Dynamic</button>
        </div>
        {DynComponent ? <DynComponent /> : null}
      </div>
    );
  }
}

export default Detail;
