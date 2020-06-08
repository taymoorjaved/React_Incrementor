import React from "react";
import "./countdisplay.css";

export default class CountDisplay extends React.Component {

    render(){
        return (
            <div className="count-display">
                {this.props.counter}
            </div>
        );
    }
}