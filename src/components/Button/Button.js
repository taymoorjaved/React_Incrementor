import React from "react";

import Button from "@material-ui/core/Button";


import "./button.css"

class MyButton extends React.Component {

    render(){
        return (
            <Button variant={this.props.variant} color={this.props.color} onClick={this.props.mode === "add" ? () => this.incrementCounter() : this.resetCounter.bind(this)}>
                {this.props.displayText}
            </Button>
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

export default MyButton;