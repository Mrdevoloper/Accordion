import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider as EnterProvider } from './Context/Enter';

ReactDOM.render(
	<React.StrictMode>
		<EnterProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</EnterProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
