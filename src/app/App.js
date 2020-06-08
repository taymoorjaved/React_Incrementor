import React from "react";
import Button from "../components/Button/Button";
import CountDisplay from "../components/CountDisplay/CountDisplay";


export default class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        };
    }
    

    updateState(updatedCounter){
        debugger;
        //setState will run here
        this.setState({
            "counter": updatedCounter
        });


    }

    render(){
        return (
            <div>
                <CountDisplay 
                    counter={this.state.counter} 
                />
                <Button 
                    displayText = "Increment Counter"
                    mode = "add"
                    counter={this.state.counter}
                    updateAppState={(updatedCounter) => this.updateState(updatedCounter)}
                />
                <Button
                    displayText = "Reset Counter"
                    mode = "reset"
                    counter={this.state.counter}
                    updateAppState={(updatedCounter) => this.updateState(updatedCounter)}
                />
                
            </div>
        );
    }
    debugger;
}