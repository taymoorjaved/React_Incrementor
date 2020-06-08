import React from "react";

import "./button.css"

class Button extends React.Component {

    render(){
        return (
            <button className={"my-inc-btn"} onClick={() => this.incrementCounter()}>
                Increment Counter
            </button>
        );
    }

    incrementCounter(){

        // Destructuring assignment:
        // let counter = this.props.counter;
        let { counter } = this.props;

        let updatedCounter = counter + 1;
        debugger;
        this.props.updateAppState(updatedCounter);
        debugger;        
    }

}

export default Button;