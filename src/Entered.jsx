import React from 'react';

import Header from './Components/Header/Header';

import { Routes, Route } from 'react-router-dom';
import Profile from './Pages/Profile/Profile';

function Entered() {
	return (
		<>
			<div className='container'>
				<Routes>
					<Route path='Profile/:id' element={<Profile />} />
				</Routes>
				<Routes>
					<Route path='/' element={<Header />} />
				</Routes>
			</div>
		</>
	);
}

export default Entered;
