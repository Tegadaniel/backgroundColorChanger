import React, { Component } from 'react';
import './App.css';


class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       textInput: '',
       color: ''
    }
  }
  handleChange = (evt) =>{
   this.setState({[evt.target.name]: evt.target.value})
  }

  enterPressed = (event) => {
   const code = event.keyCode || event.which;
   if(code === 13) { 
     this.setState({color: this.state.textInput, textInput: ""});
   } 
}
  handleClick = (evt) =>{
    this.setState({
      color: this.state.textInput,
      textInput: ""
    })
  }
 render() {
  console.log(this.state.color, this.state.textInput);

    return (
          <div className ="col-12  pt-3 ">
         <div style = {{backgroundColor: this.state.color}}>
        
        <h1>Enter your desired Background Color</h1>
        <div className = "form-group">
        <input type = "text" name= "textInput" 
          value = {this.state.textInput}
          onChange = {this.handleChange}
          placeholder = "Enter color"
          required
         onKeyPress={this.enterPressed}
        />
        </div>
        <button 
        onClick = {this.handleClick}
        className = "btn btn-primary  border-3 text-capitalize"
        > Click to change Color</button>
        </div>
      </div>

    );
  }
}

export default App;
