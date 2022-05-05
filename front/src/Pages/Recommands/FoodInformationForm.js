import { Table } from 'react-bootstrap';
import { NutInfoWords } from '../../Commons/consts';

/*단일 음식 정보를 표현하기 위한 폼*/
const FoodInformationForm = ({ foodData }) => {
	const { foodName, ImgURL, ...data } = foodData;
	const foodList = [];
	console.log(data);

	for (let key in data) {
		foodList.push(makelist(key, data[key]));
	}

	return (
		<div>
			<h4>{foodName}</h4>
			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						<th>구분</th>
						<th>영양소</th>
						<th>함유량</th>
					</tr>
				</thead>
				<tbody>{foodList}</tbody>
			</Table>
		</div>
	);
};

const makelist = (title, obj) => {
	const header = [<td>{NutInfoWords.nutToString(title)}</td>];
	const nutritions = [];
	const nutValues = [];
	for (let key in obj) {
		nutritions.push(<li key={title + key}>{NutInfoWords.nutToString(key)}</li>);
		nutValues.push(<li key={title + key}>{obj[key]}</li>);
	}

	return (
		<tr>
			{header}
			<td>
				<ul>{nutritions}</ul>
			</td>
			<td>
				<ul>{nutValues}</ul>
			</td>
		</tr>
	);
};

export default FoodInformationForm;
