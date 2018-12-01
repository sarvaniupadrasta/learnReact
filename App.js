import React, { Component } from 'react';
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            header: "Header from props...",
            content: "Content from props..."
        }
    }
   render(){
      return(
         <div>
            <h1>Hello React</h1>
            <h2>{this.props.renderArg1}</h2>
            <h2>{this.props.renderArg2}</h2>
            <h2>{this.props.defaultArg1}</h2>
            <h2>{this.props.defaultArg2}</h2>
            <Component1 headerProp = {this.state.header}/>
         </div>
      );
   }
}
class Component1 extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.headerProp}</h1>
            </div>
        );
    }
}

App.defaultProps = {
    defaultArg1:"App default argument1",
    defaultArg2:"App default argument2"
}
export default App;