import * as Content from './styleContents';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
const teamMembers = [
	['홍일도', 'FRONTEND', 'theohong@gmail.com', '/img/홍일도님_프로필.jpg'],
	['배주영', 'BACKEND', 'baejuyoung49@gmail.com', '/img/배주영님_프로필.png'],
	['김기동', 'FRONTEND', 'dewrain331@gmail.com', '/img/김기동님_프로필.jpg'],
	['김성훈', 'BACKEND', 'open7rms@gmail.com', '/img/김성훈님_프로필.png'],
	['홍주완', 'FRONTEND', 'vjvl95@naver.com', '/img/홍주완님_프로필.jpg'],
	['서형준', 'BACKEND', 'seogudwns12@gmail.com', '/img/서형준님_프로필.jpg'],
];

const StyledProfileImg = styled.img`
	width: ${props => props.width};
	height: ${props => (props.height ? props.height : 'none')};
	margin: ${props => (props.margin ? props.margin : 'none')};
	border-radius: ${props => (props.borderRadius ? props.borderRadius : 'none')};
`;
const StyledTeamSpan = styled.span`
	font-weight: ${props => (props.fontWeight ? props.fontWeight : 'none')};
	margin: ${props => (props.margin ? props.margin : 'none')};
	font-size: ${props => (props.fontSize ? props.fontSize : 'none')};
	padding: ${props => (props.padding ? props.padding : 'none')};
`;
const ContentTooMuchCoder = () => {
	const TeamMember = ({ teamMember }) => {
		return (
			<Card style={{ display: 'inline-block', width: '50%' }}>
				<Content.StyledTeamBox style={{ backgroundColor: 'white' }}>
					<StyledProfileImg
						borderRadius="15px"
						margin="5px 0 0 10px"
						src={teamMember[3]}
						width="50px"
						height="50px"
					/>

					<StyledTeamSpan
						fontWeight="bolder"
						margin="0px 0px  0px 20px"
						padding="10px 0px 0px 0px"
						fontSize="20px"
					>
						{teamMember[0]}
						<StyledTeamSpan
							fontWeight="lighter"
							padding="10px 0px 0px 0px"
							margin="0px 0px 0px 20px"
							fontSize="20px"
						>
							{teamMember[1]}
						</StyledTeamSpan>
						<p style={{ fontWeight: 'lighter', margin: '0px' }}>{teamMember[2]}</p>
					</StyledTeamSpan>
				</Content.StyledTeamBox>
			</Card>
		);
	};

	return (
		<Card>
			{teamMembers.map((teamMember, index) => (
				<TeamMember key={index} teamMember={teamMember} />
			))}
		</Card>
	);
};

export default ContentTooMuchCoder;
