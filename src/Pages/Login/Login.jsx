import React from 'react';
import './Login.scss';
import { Context } from '../../Context/Enter';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
	const { setToken } = React.useContext(Context);

	const handleSubmit = (evt) => {
		evt.preventDefault();

		const { user_email, user_password } = evt.target.elements;

		fetch('https://reqres.in/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: user_email.value.trim(),
				password: user_password.value.trim(),
			}),
		})
			.then((response) => response.json())
			.then((data) => setToken(data?.token));
	};
	return (
		<form className='wrapper' onSubmit={handleSubmit}>
			{/* <input
				type='email'
				defaultValue='eve.holt@reqres.in'
				name='user_email'
			/>
			<input
				type='password'
				defaultValue='cityslicka'
				name='user_password'
			/> */}
			<TextField
				type='email'
				id='outlined-required'
				label='Login'
				name='user_email'
			/>
			<TextField
				id='outlined-password-input'
				label='Password'
				type='password'
				autoComplete='current-password'
				name='user_password'
			/>
			<Button type='submit' variant='contained' size='large'>
				Log in
			</Button>
		</form>
	);
}

export default Login;
