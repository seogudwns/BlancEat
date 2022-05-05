/* 백엔드에서 들어오는 비구조화된 데이터를 다루기 쉽게 구조화 시킨다 */
import { BlankImageURL } from '../../Commons/consts';
const NutInfoParser = foodData => {
	const newData = {
		foodName: foodData.foodName,
		ImgURL: foodData.photo || BlankImageURL,
		ENERGY: { Cal: foodData.energy },
		MAJORNUTS: { Carbon: foodData.carbon },
		SNF: { Sugar: foodData.sugar, Fiber: foodData.fiber },
		INORGANICS: { Ca: foodData.Ca, Na: foodData.na, Fe: foodData.fe, Zn: foodData.zn },
		VITAMINS: {
			VitA: foodData.vitA,
			VitB6: foodData.vitB6,
			VitC: foodData.vitC,
			VitE: foodData.vitE,
			Niacin: foodData.niacin,
			Folate: foodData.folate,
		},
	};
	return newData;
};

export default NutInfoParser;
// Weight: foodData.weight,
// Unit: foodData.unit,
