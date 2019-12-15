import React from 'react';
import * as RC from '../assets/styles/nav';
import { TNavListData } from '../assets/map.v';
import { Link } from 'react-router-dom';

const TNavListIcon = TNavListData.map(data => (
	<RC.TNavListIcon src={data.source} pointer={data.clickable} alt={data.alt} />
));

export default () => {
	return (
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
			<RC.LoginButton>
				<Link to="/login">Login</Link>
			</RC.LoginButton>
		</RC.TNavFlexBoard>
	);
};
