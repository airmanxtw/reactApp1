import React from 'react';
import ReactDOM from 'react-dom';

// * 載入組件
import { Welcome } from "./components/hello.js";
import { Hello2 } from "./components/hello2";

const element = <Hello2 />;

// * React.js 起手式
ReactDOM.render(
  element,
  document.getElementById('root')
);