import React from 'react';
import ReactDOM from 'react-dom';


class Calc extends React.Component {
  render() {
    return <div>Hello World</div>
  }
}
ReactDOM.render(
  <Calc/>,
  document.getElementById('calc')
);
