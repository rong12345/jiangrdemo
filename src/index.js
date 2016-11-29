import React from 'react';
import {render} from 'react-dom';

import App from './App.js';
import Routers from './routes.js';
import './main.css';

render(<Routers />,document.getElementById('root'));
