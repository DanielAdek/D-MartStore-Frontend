import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Alias } from '../importer';
import * as RC from '../assets/styles/nav';
import { TNavListData } from '../assets/map.v';

const { RingLoad } = Alias.pathToComponents('spiners');

const handleClick = href => window.location.href = href;

const TNavListIcon = TNavListData.map((data, i) => (
	<RC.TNavListIcon onClick={() => handleClick(data.url)} key={i} src={data.source} pointer={data.clickable} alt={data.alt} />
));

export default () => {
	// Redux Hooks
	const user = useSelector(state => state.Authenticate.user);
	const processing = useSelector(state => state.Loading.loading);

	const avatar = (user && user.avatar) || localStorage.getItem('avatar');
	const userAuth = localStorage.getItem('x-auth-t');

	return (
		<RC.TNavWrapper>
			<RC.TNavFlexBoard>
				<RC.TNavFlexCont>
					<RC.TNavFlexIconText bRight={true}>
						<RC.TNavListIcon src={require('../assets/images/shuttle-van-solid.svg')} alt="van" />
						<RC.TNavSmallText>Free Delivery</RC.TNavSmallText>
					</RC.TNavFlexIconText>
					<RC.TNavFlexIconText bRight={true}>
						<RC.TNavListIcon src={require('../assets/images/globe-americas-solid.svg')} alt="van" />
						<RC.TNavSmallText>Return Policy</RC.TNavSmallText>
					</RC.TNavFlexIconText>
					<RC.TNavFlexIconText>
						<RC.TNavSmallText style={{ marginRight: '10px' }}>Follow Us</RC.TNavSmallText>
						{TNavListIcon}
						</RC.TNavFlexIconText>
					</RC.TNavFlexCont>
					{avatar && userAuth ? (
						<RC.AvatarContainer>
							{processing ? <RingLoad /> : <RC.Avatar src={avatar}/>}
						</RC.AvatarContainer>) : (
						<RC.LoginButton>
							<RC.LinkContainer>
								<Link to="/login">Login</Link>
							</RC.LinkContainer>
							<RC.LinkContainer ml="10px">
								<Link to="/signup">Sign up</Link>
							</RC.LinkContainer>
						</RC.LoginButton>)}
			</RC.TNavFlexBoard>
		</RC.TNavWrapper>
	);
};
