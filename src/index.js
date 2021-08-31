import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu';

import { data } from "./data.js";

ReactDOM.render(
  <Menu items={data} title = 'Delicious Recipes '/>, 
  document.getElementById('root')
)