import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/base.css';


class Calc extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <Calc/>,
  document.getElementById('calc')
);
