import React from "react";

import "./button.css"

class Button extends React.Component {

    render(){
        return (
            <button className={"my-inc-btn"} onClick={this.props.mode === "add" ? () => this.incrementCounter() : this.resetCounter.bind(this)}>
                {this.props.displayText}
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

    resetCounter(){

        if (this.props.counter > 0) {
            this.props.updateAppState(0);
        }
        
    }

}

export default Button;