import React, { Component } from "react";

const MainContext = React.createContext();

class Provider extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { state, actions } = this.props;
        return (
            <MainContext.Provider
                value={{
                    state: state,
                    actions: actions
                }}
            >
                {this.props.children}
            </MainContext.Provider>
        );
    }
}
  
export { Provider, MainContext };