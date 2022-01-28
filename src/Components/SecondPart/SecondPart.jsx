import React from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// button
// import { Button } from '@mui/material';

import './SecondPart.scss';
import orqaga from '../../Assets/iconcha/Arrow.svg';
function SecondPart() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [user, setUser] = React.useState({});

	React.useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					'https://reqres.in/api/users/' + id,
				);
				const data = await response.json();

				setUser(data.data);
			} catch (err) {
				console.log(err);
			}
		})();
	}, [id]);
	return (
		<>
			<div className='wrp'>
				<div className='wrp__header-pr'>
					<button
						onClick={() => navigate(-1)}
						className='wrp__btnBack'>
						<img src={orqaga} alt='' />
					</button>

					<div className='wrp__TitleProfile'>
						<li className='wrp__name'>
							<NavLink to='SecondPart/:id'>
								{user.first_name}
							</NavLink>
						</li>
						<li>1,070 Tweets</li>
					</div>
				</div>
				<div className='wrp__profile'>
					<img className='wrp__Rectangle' src={''} alt='' />
					<div className='wrp__PicBtnWrp'>
						<img
							className='wrp__boburPic'
							src={user.avatar}
							alt=''
						/>

						<button
							className='wrp__profileNdPic'
							marginLeft='10px'
							color='primary'
							variant='contained'
							size='small'>
							Log out
						</button>
					</div>
				</div>
				<div className='wrp__company'>
					<NavLink to='SecondPart/:id' className='wrp__ComBobur'>
						{user.first_name}
					</NavLink>
					<NavLink className='wrp__email' to='SecondPart/:id'>
						{user.email}
					</NavLink>
					<div className='wrp__tech'>
						<p>UX&UI designer at</p>
						<NavLink className='wrp__linktech' to='SecondPart/:id'>
							@EveryWhere
						</NavLink>
					</div>
				</div>
				<div className='wrp__location'>
					<NavLink className='wrp__mashagdaman' to='SecondPart/:id'>
						MARS
					</NavLink>
					<NavLink className='wrp__emailBobur' to='SecondPart/:id'>
						{user.email}
					</NavLink>
					<NavLink className='wrp__born' to='SecondPart/:id'>
						Born November 24, 1995
					</NavLink>
					<NavLink className='wrp__moment' to=''>
						Joined May 2020
					</NavLink>
				</div>
				{/* <div className='wrp__follow'>
					<h3>
						67 <span className='wrp__following'>Following</span>{' '}
					</h3>
					<h3 className='wrp__follower'>
						47 <span className='wrp__followers'>Followers</span>{' '}
					</h3>
				</div> */}
				<div className='wrp__mediawrp'>
					<div className='wrp__Media'>
						<NavLink
							className='wrp__mediaLike salom   wrp__tweets'
							to=''>
							Tweets
						</NavLink>
						<NavLink
							className='wrp__mediaLike salom wrp__reply '
							to=''>
							Tweets & replies
						</NavLink>
						<NavLink
							className='wrp__mediaLike , salom wrp__Lmedia '
							to=''>
							Media
						</NavLink>
						<NavLink
							className='wrp__mediaLike salom wrp__likes'
							to=''>
							Likes
						</NavLink>
					</div>
				</div>

				<span className='wrp__pinned'>Pinned Tweet</span>

				<div className='wrp__pinText'>
					<div className='wrp__curs1'>
						<img
							className='wrp__fourPic'
							src={user.avatar}
							alt=''
						/>
						<div className='wrp__txtwrp'>
							<NavLink
								className='wrp__txtBoburName'
								to='SecondPart/:id'>
								{user.first_name}
							</NavLink>
							<NavLink
								className='wrp__txtBobur'
								to='SecondPart/:id'>
								{user.avatar}
								<span className='wrp__txtBobur'> Apr 1</span>
							</NavLink>
							<li className='wrp__textTxt'>
								4-kursni tugatgunimcha kamida bitta biznesim
								bo'lishini, uylanish uchun moddiy jihatdan
								to'la-to'kis tayyor bo'lishni, sog'lik va
								jismoniy holatni normallashtirishni reja qildim
							</li>
						</div>
					</div>
				</div>

				<div className='wrp__pinText'>
					<div className='wrp__curs1'>
						<img
							className='wrp__fourPic1'
							src={user.avatar}
							alt=''
						/>
						<div className='wrp__txtwrp'>
							<NavLink
								className='wrp__txtBoburName'
								to='SecondPart/:id'>
								{user.first_name}
							</NavLink>
							<NavLink
								className='wrp__txtBobur'
								to='SecondPart/:id'>
								{user.email}
								<span className='wrp__txtBobur'> Apr 1</span>
							</NavLink>
							<li className='wrp__textTxt'>
								Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi,
								nima deyayotganimizga qarab ham o'tirmaymiz.
								<br />
								Bitta biznes trener nito gapirib qo'ysa, hamma
								biznes trenerlar yomonga chiqadi slishkom aqlli
								odamlar nazdida. <br />
								Gap faqat biznes trenerlar haqida emas.
							</li>
						</div>
					</div>
				</div>
				<div className='wrp__pinText2'>
					<div className='wrp__curs12'>
						<img
							className='wrp__fourPic12'
							src={user.avatar}
							alt=''
						/>
						<div className='wrp__txtwrp'>
							<NavLink
								className='wrp__txtBoburName'
								to='SecondPart/:id'>
								{user.first_name}
							</NavLink>
							<NavLink
								className='wrp__txtBobur'
								to='SecondPart/:id'>
								{user.email}
								<span className='wrp__txtBobur'> Apr 1</span>
							</NavLink>
							<li className='wrp__textTxt'>
								A bo'pti maskamasman
							</li>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default SecondPart;
