import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//'multiply' is the default export, due to 'export default',
//{multiplyByTwo} is a named export.
import multiply, {multiplyByTwo} from './multiply';
/** Import everything from ./multiply into a namespace we named multiplyModule. */
import * as multiplyModule from './multiply'; 
/** Using alias for named exports, then we can use mBy2 in the code below. */
//import multiply, {multiplyByTwo as mBy2} from './multiply';

const a = 2;
const b = 2;

console.log(`${a} * ${b} = ${multiply(a,b)}`);
//We can use the multiplyModule namespace to call the default property (multiply) in this way:
console.log(`${a} * ${b} = ${multiplyModule.default(a,b)}`);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
