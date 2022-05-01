import styled from 'styled-components';
import { Table } from 'react-bootstrap';
import { NutInfoWords } from '../../Commons/consts';
const GridContainer = styled.div`
	display: grid;
`;

/*단일 음식 정보를 표현하기 위한 폼*/

const FoodInformationForm = ({ FoodData }) => {
	if (FoodData) {
		const {
			foodName,
			Cal,
			Protein,
			Fat,
			Carbon,
			Sugar,
			Fiber,
			Ca,
			VitA,
			Fe,
			Na,
			Zn,
			Niacin,
			VitE,
			VitC,
			Folate,
			VitB6,
		} = FoodData;
		for (let key in FoodData) {
			console.log(NutInfoWords.nutToString(key) + ' : ' + FoodData[key]);
		}
		return (
			<>
				<div>
					<h4>열량</h4>
					<ul>
						<li>칼로리 {Cal} Kcal</li>
					</ul>
					<h4>3대 영양소</h4>
					<ul>
						<li>탄수화물 {Carbon} Kcal</li>
						<li>단백질 {Protein} Kcal</li>
						<li>지방 {Fat} Kcal</li>
					</ul>
					<h4>당 / 식이섬유</h4>
					<ul>
						<li>당류 {Sugar} Kcal</li>
						<li>식이섬유 {Fiber} Kcal</li>
					</ul>
					<h4>무기염류</h4>
					<ul>
						<li>칼슘 {Ca} Kcal</li>
						<li>나트륨 {Na} Kcal</li>
						<li>철분 {Fe} Kcal</li>
						<li>아연 {Zn} Kcal</li>
					</ul>
					<h4>비타민군</h4>
					<ul>
						<li>비타민 A {VitA} Kcal</li>
						<li>비타민 B6 {VitB6} Kcal</li>
						<li>비타민 C {VitC} Kcal</li>
						<li>비타민 E {VitE} Kcal</li>
						<li>나이아신 {Niacin} Kcal</li>
						<li>엽산 {Folate} Kcal</li>
					</ul>
				</div>
			</>
		);
	} else return;
};

export default FoodInformationForm;
/*
<Table striped hover bordered variant="dark">
					<thead>
						<h4>{foodName} 영양 정보</h4>
						<tr>
							<th>구분</th>
							<th>영양소</th>
							<th>함유량(단위)</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>열량</td>
							<td>칼로리</td>
							<td>{Cal}(KCal)</td>
						</tr>
						<tr>
							<td>3대 영양소</td>
							<td>
								<ul>
									<li>탄수화물</li>
									<li>단백질</li>
									<li>지방</li>
								</ul>
							</td>
							<td>
								<ul>
									<li>{Carbon}(Kcal)</li>
									<li>{Protein}(Kcal)</li>
									<li>{Fat}(Kcal)</li>
								</ul>
							</td>
						</tr>
					</tbody>
				</Table>
				
*/
