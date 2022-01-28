import React from 'react';
import Login from './Pages/Login/Login';
import { Routes, Route } from 'react-router-dom';

function Unentered() {
	return (
		<Routes>
			<Route path='login' element={<Login />} />
		</Routes>
	);
}

export default Unentered;
