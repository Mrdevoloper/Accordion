import React from 'react';
import { NavLink } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Header.scss';

const Header = function () {
	const [users, setUsers] = React.useState([]);

	const [isLoading, setLoading] = React.useState(true);

	React.useEffect(() => {
		(async () => {
			const response = await fetch('https://reqres.in/api/users');
			const data = await response.json();
			if (data?.data?.length > 0) {
				setUsers([...data.data]);
				setLoading(false);
			}
		})();
	}, []);
	console.log(users);
	return (
		<>
			<h1
				className='
			text'>
				Accordion
			</h1>

			{isLoading && <h1>Loading ...</h1>}
			<div className='includes'>
				<div className='wrap'>
					{users.length > 0 &&
						users.map((user) => (
							<div key={user.id} className='includes__User'>
								<Accordion>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls='panel1a-content'
										id='panel1a-header'>
										<Typography>
											{' '}
											<NavLink
												className='salom'
												to={'Profile/' + user.id}>
												{user.first_name}
											</NavLink>
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											<div className='includes__user1'>
												<NavLink
													to={'Profile/' + user.id}>
													<img
														className='includes__pic2'
														src={user.avatar}
														alt=''
													/>
												</NavLink>
												<div className='wrapperUserNameTexts'>
													<div className='includes__NamePoint'>
														<li
															key={user.id}
															className='includes__nameLink'>
															<NavLink
																className='salom'
																to={
																	'Profile/' +
																	user.id
																}>
																{
																	user.first_name
																}
															</NavLink>
															<NavLink
																to={
																	'Profile/' +
																	user.id
																}>
																{user.last_name}
															</NavLink>
														</li>
													</div>
												</div>
											</div>
										</Typography>
									</AccordionDetails>
								</Accordion>
							</div>
						))}
				</div>
			</div>
		</>
	);
};
export default Header;
