import React from 'react';
import ReactDOM from 'react-dom';

// * 載入組件
import {Welcome} from "./components/hello.js";

const element = <Welcome />;

// * React.js 起手式
ReactDOM.render(
  element,
  document.getElementById('root')
);