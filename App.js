import React, { Component } from 'react';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data:"value1"
        };
        this.state.updateValueHandler = this.updateValue.bind(this);
    };
    updateValue(e) {
        this.setState({data: e.target.value});
    }
   render(){
      return(
         <Component1 dataProp={this.state.data} updateProp={this.state.updateValueHandler}/>
      );
   }
}

class Component1 extends Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.dataProp} onChange={this.props.updateProp} >
                </input>
                <h2>
                    {this.props.dataProp}
                </h2>
            </div>
        );

    }
}
export default App;
