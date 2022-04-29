import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const StyledUserInfo = styled(Card)`
	margin-left: 30px;
	border: solid 1px black;
	width: ${param => (param.width ? param.width : 'none')};
	max-width: ${param => (param.maxWidth ? param.maxWidth : 'none')};
	height: ${param => param.height};
	margin-right: ${param => (param.marginRight ? param.marginRight : 'none')};
	border-radius: 10px;
`;
const StyledUserInfoBox = styled(Card)`
	padding-top: 13px;
	color: gray;
	font-size: 20px;
	height: 50px;
	border: 1px solid black;
	margin-bottom: 10px;
	border-radius: 10px;
	width: 90%;
`;

const StyledUserBmiInfoBox = styled(Card)`
	padding-top: 13px;
	color: gray;
	font-size: 20px;
	height: 50px;
	border: 1px solid black;
	margin-bottom: 10px;
	border-radius: 10px;
	width: 300px;
`;
const StyledUserBmibox = styled(Card)`
	margin-left: 30px;
	border: solid 1px black;
	width: 50%;
	max-width: 500px;
	margin-right: 100px;
	border-radius: 10px;
`;

const ContentUserInfo = ({ num, title, userInfo }) => {
	const UserInfo = () => {
		return (
			<StyledUserInfo width="40%">
				<h1 style={{ fontWeight: 'lighter' }}>{title}</h1>
				<div style={{ border: 'solid 1px black', marginBottom: '10px' }}></div>
				<div style={{ display: 'flex' }}>
					<div style={{ width: '30%' }}>gd</div>
					<div style={{ width: '70%' }}>
						<StyledUserInfoBox>{userInfo[0]}</StyledUserInfoBox>
						<StyledUserInfoBox>{userInfo[1]}</StyledUserInfoBox>
						<StyledUserInfoBox>{userInfo[2]}</StyledUserInfoBox>
					</div>
				</div>
			</StyledUserInfo>
		);
	};
	const BmiInfo = () => {
		return (
			<StyledUserBmibox>
				<h1 style={{ fontWeight: 'lighter' }}>BMI 지수</h1>
				<div style={{ border: 'solid 1px black', marginBottom: '10px' }}></div>
				<div style={{ display: 'flex' }}>
					<div style={{ margin: '0px auto' }}>
						<StyledUserBmiInfoBox></StyledUserBmiInfoBox>
						<StyledUserBmiInfoBox></StyledUserBmiInfoBox>
						<StyledUserBmiInfoBox></StyledUserBmiInfoBox>
					</div>
				</div>
			</StyledUserBmibox>
		);
	};

	const NutInfo = () => {
		return (
			<StyledUserInfo maxWidth="800px" width="25%">
				<h1 style={{ fontWeight: 'lighter' }}>영양 정보</h1>
				<div style={{ border: 'solid 1px black', marginBottom: '10px' }}></div>
				<div style={{ display: 'flex' }}>
					<div style={{ width: '100%', textAlign: 'right' }}>
						<StyledUserInfoBox>
							<span>단백질</span>
						</StyledUserInfoBox>
						<StyledUserInfoBox>
							<span>지방</span>
						</StyledUserInfoBox>
						<StyledUserInfoBox>
							<span>탄수화물</span>
						</StyledUserInfoBox>
					</div>
				</div>
			</StyledUserInfo>
		);
	};
	return (
		<>
			{num === 1 && <UserInfo />}
			{num === 2 && <BmiInfo />}
			{num === 3 && <NutInfo />}
		</>
	);
};

export default ContentUserInfo;
