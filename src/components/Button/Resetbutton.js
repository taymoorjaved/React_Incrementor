import React from "react";

import "./Resetbutton.css"

class Resetbutton extends React.Component {
    render(){
        return(
            <button className={"my-inc-btn"} onClick={() => this.resetCounter()}>
                Reset Counter
            </button>
        )
    }

    resetCounter(){
          if (this.state.counter > 0) {
              this.state.counter = 0
          }  
    }

}

export default Resetbutton;