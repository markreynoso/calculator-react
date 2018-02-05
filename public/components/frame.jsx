import React from 'react';
import Screen from './screen.jsx';
import Button from './button.jsx';

class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div className='frame'>
        <div className='calc-title'>
          Calculator
        </div>
        <Screen
          question={this.state.question}
          answer={this.state.answer} />
        <div className='button-row'>
          <Button label='1' handleClick={this.handleClick} type='input' />
          <Button label='2' handleClick={this.handleClick} type='input' />
          <Button label='3' handleClick={this.handleClick} type='input' />
          <Button label='-' handleClick={this.handleClick} type='action' />
          <Button label='+' handleClick={this.handleClick} type='action' />
        </div>
        <div className='button-row'>
          <Button label='4' handleClick={this.handleClick} type='input' />
          <Button label='5' handleClick={this.handleClick} type='input' />
          <Button label='6' handleClick={this.handleClick} type='input' />
          <Button label='/' handleClick={this.handleClick} type='action' />
          <Button label='*' handleClick={this.handleClick} type='action' />
        </div>
        <div className='button-row'>
          <Button label='7' handleClick={this.handleClick} type='input' />
          <Button label='8' handleClick={this.handleClick} type='input' />
          <Button label='9' handleClick={this.handleClick} type='input' />
          <Button label='.' handleClick={this.handleClick} type='input' />
          <Button label='0' handleClick={this.handleClick} type='input' />
        </div>
        <div className='button-row'>
          <Button label='<' handleClick={this.handleClick} type='action' />
          <Button label='clear' handleClick={this.handleClick} type='action' />
          <Button label='enter' handleClick={this.handleClick} type='action' />
        </div>
      </div>
    );
  }
  handleClick(event) {
    const value = event.target.value;
    switch(value) {
      case 'enter': {
        const answer = eval(this.state.question).toString()
        this.setState({answer})
        break
      }
      case 'clear': {
        this.setState({question: '', answer: ''})
        break
      }
      case '<': {
        if (this.state.question) {
          const update = this.state.question.slice(0, -1)
          this.setState({question: update})
          break
        } else {
          break
        }
      }
      default: {
        this.setState({question: this.state.question += value})
        break
      }
    }
  }
}

export default Frame;
