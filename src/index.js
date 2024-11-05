import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from './components/layout';

import './stylesheets/index.scss';
import 'font-awesome/css/font-awesome.min.css';

document.body.innerHTML = '<div id="root"></div>';
const root = createRoot(document.getElementById('root'));
root.render(<Layout />);
