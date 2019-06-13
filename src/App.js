import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Input from './components/Input';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       display: '0',
       input: '',
       operators: ['*', '/', '+', '-']
    }
    this.handleClear = this.handleClear.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleClear = () => {
    this.setState({ display: '0', input: '' });
  };

  handleDecimal = () => {
    const { display, input } = this.state;

    if (display.indexOf('.') === -1) {
      this.setState({ display: display + '.', input: input + '.' });
    }
  };

  handleNumber = (e) => {
    const value = e.target.value.toString();
    const { input, display, operators } = this.state;

    if (display === '0' && value === '0') return;
    else if (input.indexOf('=') !== -1) {
      this.setState({ display: value, input: value });
    } else if (display === '0' || operators.indexOf(display) !== -1) {
      this.setState({
        display: value,
        input: input + value
      });
    } else {
      this.setState({ display: display + value, input: input + value });
    }
  };

  handleOperator = (e) => {
    const { input, display, operators } = this.state;
    const value = e.target.value.toString();

    if (operators.indexOf(input[input.length - 1]) !== -1) {
      this.setState({ display: value, input: input.slice(0, -1) + value });
    } else if (input.indexOf('=') !== -1) {
      this.setState({ 
        input: display.toString() + value, 
        display: value 
      
      });
    } else this.setState({ 
      display: value, 
      input: input + value 
    });
  };

  calculate = () => {
    const { input } = this.state;
    let evalStr = eval;
    const result = evalStr(input);
    this.setState({ 
        display: result,
        input: input + `= ${result}` 
      });
  };


  render() {
    const { input, display } = this.state;
    const { handleClear, handleNumber, handleOperator, handleDecimal, calculate } = this;
    return (
      <div className="app">
    
        <div id="calculator">
        <Input display={display} input={input} />
        <Buttons
          clear={handleClear}
          number={handleNumber}
          operator={handleOperator}
          decimal={handleDecimal}
          calculate={calculate}
          />
        </div>
      </div>
    );
  }
}

export default App;