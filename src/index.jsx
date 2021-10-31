import React from 'react';
import ReactDOM from 'react-dom';

// * 載入組件
import { Welcome } from "./components/hello.js";
import Mu from "./components/mu.js";

// const element = <Hello2 />;


// * React.js 起手式
ReactDOM.render(
  <Mu />,
  document.getElementById('root')
);