import styled from 'styled-components';
import { Table } from 'react-bootstrap';
import { NutInfoWords } from '../../Commons/consts';

/*단일 음식 정보를 표현하기 위한 폼*/

const FoodInformationForm = ({ foodData }) => {
	const { foodName, ImgURL, ...data } = foodData;
	const foodList = [];
	foodList.push(<h4>{foodName}</h4>);
	for (let key in data) {
		foodList.push(makelist(key, data[key]));
	}
	return <div>{foodList}</div>;
};

const makelist = (title, obj) => {
	const header = [<h4>{NutInfoWords.nutToString(title)}</h4>];
	const taglist = [];
	for (let key in obj) {
		taglist.push(
			<li key={title + key}>
				{NutInfoWords.nutToString(key)} / {obj[key]}
			</li>,
		);
	}

	return (
		<>
			{header}
			<ul>{taglist}</ul>
		</>
	);
};

export default FoodInformationForm;
