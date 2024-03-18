import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Blog } from './Blog';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Blog />
	</BrowserRouter>,
);
