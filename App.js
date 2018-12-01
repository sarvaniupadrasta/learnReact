import React, { Component } from 'react';
class App extends Component{
    constructor(){
        super();
        this.header = "Header from state";
        this.content = "Content from state";
    }
   render(){
      return(
         <div>
            <h2>{this.header}</h2>
            <h2>{this.content}</h2>
         </div>
      );
   }
}
export default App;