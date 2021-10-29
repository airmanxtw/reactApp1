import React from 'react';
import ReactDOM from 'react-dom';

//建立一個DOM物件
let title = "hello";
//let element = React.createElement("h1",{},"hello {title}");
const element={
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
}




//使用ReactDOM.render把剛建立的物件element插入目標DOM中
ReactDOM.render(
  element,
  document.getElementById('root')
);
