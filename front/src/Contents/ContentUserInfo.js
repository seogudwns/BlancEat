import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const StyledUserInfo = styled(Card)`
	margin-left: 30px;
	border: solid 1px black;
	width: ${param => (param.width ? param.width : 'none')};
	max-width: ${param => (param.maxWidth ? param.maxWidth : 'none')};
	min-width: ${param => (param.minWidth ? param.minWidth : 'none')};

	height: ${param => param.height};
	margin-right: ${param => (param.marginRight ? param.marginRight : 'none')};
	border-radius: 10px;
`;
const StyledUserInfoBox = styled(Card)`
	display: ${param => (param.display ? param.display : '')};
	justify-content: ${param => (param.justifyContent ? param.justifyContent : '')};
	padding-top: 13px;
	color: gray;
	font-size: 20px;
	height: 50px;
	border: 1px solid black;
	margin-bottom: 10px;
	border-radius: 10px;
	width: 90%;
	margin-left: ${param => (param.marginLeft ? param.marginLeft : '')};
`;

const StyledUserBmibox = styled(Card)`
	margin-left: 30px;
	border: solid 1px black;
	width: 50%;
	max-width: 500px;
	margin-right: 100px;
	border-radius: 10px;
	min-width: ${param => (param.minWidth ? param.minWidth : 'none')};
`;

const StyledProcessBar = styled.progress`
	appearance: none;
	margin-left: 20px;
	height: 30px;
	width: 300px;
	::-webkit-progress-value {
		border-radius: 10px;
		background: ${param => (param.color ? param.color : '')};
	}
	::-webkit-progress-bar {
		border-radius: 10px;
		background: none;
	}
`;
const StyledTitle = styled.h1`
	font-weight: lighter;
	text-align: center;
`;
const StyledLine = styled.div`
	border: solid 1px black;
	margin-bottom: 10px;
`;
const ContentUserInfo = ({ num, title, userInfos, width }) => {
	const UserInfo = () => {
		return (
			<StyledUserInfo width="40%">
				<StyledTitle>{title}</StyledTitle>
				<StyledLine />
				<div style={{ display: 'flex' }}>
					<div style={{ width: '30%' }}>gd</div>
					<div style={{ width: '70%' }}>
						{userInfos.map((userInfo, index) => (
							<StyledUserInfoBox>{userInfo}</StyledUserInfoBox>
						))}
					</div>
				</div>
			</StyledUserInfo>
		);
	};
	const BmiInfo = ({ title }) => {
		return (
			<StyledUserBmibox minWidth="320px">
				<StyledTitle>{title}</StyledTitle>
				<StyledLine />
				<div style={{ display: 'flex' }}>
					<div style={{ margin: '0px auto' }}></div>
				</div>
			</StyledUserBmibox>
		);
	};

	const NutritionInfo = () => {
		const Nutritions = ['단백질', '지방', '탄수화물'];
		const BarColors = ['green', 'pink', 'gray'];
		return (
			<StyledUserInfo maxWidth="800px" width="25%" minWidth="450px">
				<StyledTitle>영양 정보</StyledTitle>
				<StyledLine />
				<div style={{ display: 'flex' }}>
					<div style={{ width: '100%', textAlign: 'right' }}>
						{Nutritions.map((nutrition, index) => (
							<StyledUserInfoBox
								marginLeft="15px"
								display="flex"
								justifyContent="space-between"
							>
								<StyledProcessBar
									color={BarColors[index]}
									value={(index + 1) * 30}
									max="100"
								/>
								<span style={{ marginRight: '10px' }}>{nutrition}</span>
							</StyledUserInfoBox>
						))}
					</div>
				</div>
			</StyledUserInfo>
		);
	};
	return (
		<>
			{num === 1 && <UserInfo />}
			{num === 2 && <BmiInfo title={title} />}
			{num === 3 && <NutritionInfo width={width} />}
		</>
	);
};

export default ContentUserInfo;
