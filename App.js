import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
    constructor() {
        super();
        this.state = {
            data:["state1"]
        };
        this.setStateHandler = this.setStateHandler.bind(this);
    };
    setStateHandler() {
        var item = "setState";
        var myArray = [];
        myArray = this.state.data.slice();
        myArray.push(item);
        console.log(myArray);
        this.setState({data:myArray});
    };
    ChangeDomHandler() {
        var myDiv = document.getElementById('myDiv');
        console.log(myDiv);
        console.log(ReactDOM.findDOMNode(myDiv));
        //myDiv.style.color = "red";
        ReactDOM.findDOMNode(myDiv).style.color = "red";
    }
   render(){
      return(
         <div>
             <button onClick={this.setStateHandler}>setState</button>
             <h2>{this.state.data}</h2>
             <h3>{Math.random()}</h3>
             <button onClick={this.ChangeDomHandler}>Change Color</button>
             <div id="myDiv">
              Color Changed
             </div>
         </div>
      );
   }
}
export default App;
