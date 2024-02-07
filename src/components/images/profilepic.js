import React from 'react';

const ProfilePic = () => {
	return (
		<div>
			<img src={require('./profile.jpg')} height={120} width={100} alt="Profile Pic" />
		</div>
	);
};
export default ProfilePic;