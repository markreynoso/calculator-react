import React from 'react';
import ReactDOM from 'react-dom';
import Frame from '../components/frame.jsx';
import '../styles/base.scss';

// class Calc extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello World</h1>
//       </div>
//     )
//   }
// }

ReactDOM.render(
  <Frame/>,
  document.getElementById('calc')
);
