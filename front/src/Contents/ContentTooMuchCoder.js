import * as Content from './styleContents';

const ContentTooMuchCoder = () => {
	const teamMembers = [
		['홍일도', 'FRONTEND', 'theohong@gmail.com', '/img/홍일도님_프로필.jpg'],
		['배주영', 'BACKEND', 'baejuyoung49@gmail.com', '/img/배주영님_프로필.png'],
		['김기동', 'FRONTEND', 'dewrain331@gmail.com', '/img/김기동님_프로필.jpg'],
		['김성훈', 'BACKEND', 'open7rms@gmail.com', '/img/김성훈님_프로필.png'],
		['홍주완', 'FRONTEND', 'vjvl95@naver.com', '/img/홍주완님_프로필.jpg'],
		['서형준', 'BACKEND', 'seogudwns12@gmail.com', '/img/서형준님_프로필.jpg'],
	];
	const TeamMember = ({ teamMember }) => {
		return (
			<div style={{ display: 'inline-block', width: '50%' }}>
				<Content.StyledTeamBox style={{ backgroundColor: 'white' }}>
					<img
						style={{
							borderRadius: '15px',
							marginLeft: '10px',
							marginTop: '5px',
						}}
						src={teamMember[3]}
						width="50px"
						height="50px"
					/>

					<span
						style={{
							fontWeight: 'bolder',
							marginLeft: '20px',
							fontSize: '20px',
						}}
					>
						{teamMember[0]}
						<span
							style={{
								fontWeight: 'lighter',
								marginLeft: '20px',
								fontSize: '20px',
							}}
						>
							{teamMember[1]}
						</span>
						<p style={{ fontWeight: 'lighter', margin: '0px' }}>{teamMember[2]}</p>
					</span>
				</Content.StyledTeamBox>
			</div>
		);
	};

	return (
		<div>
			{teamMembers.map((teamMember, index) => (
				<TeamMember key={index} teamMember={teamMember} />
			))}
		</div>
	);
};

export default ContentTooMuchCoder;
