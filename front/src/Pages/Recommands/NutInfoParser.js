/* 백엔드에서 들어오는 비구조화된 데이터를 다루기 쉽게 구조화 시킨다 */
import { BlankImageURL } from '../../Commons/consts';
const NutInfoParser = foodData => {
	const newData = {
		foodName: foodData.foodName,
		ImgURL: foodData.ImgURL || BlankImageURL,
		ENERGY: { Cal: foodData.Cal.toFixed(2) },
		MAJORNUTS: {
			Carbon: foodData.Carbon.toFixed(2),
			Fat: foodData.Fat.toFixed(2),
			Protein: foodData.Protein.toFixed(2),
		},
		SNF: { Sugar: foodData.Sugar.toFixed(2), Fiber: foodData.Fiber.toFixed(2) },
		INORGANICS: {
			Ca: foodData.Ca.toFixed(2),
			Na: foodData.Na.toFixed(2),
			Fe: foodData.Fe.toFixed(2),
			Zn: foodData.Zn.toFixed(2),
		},
		VITAMINS: {
			VitA: foodData.VitA.toFixed(2),
			VitB6: foodData.VitB6.toFixed(2),
			VitC: foodData.VitC.toFixed(2),
			VitE: foodData.VitE.toFixed(2),
			Niacin: foodData.Niacin.toFixed(2),
			Folate: foodData.Folate.toFixed(2),
		},
	};
	return newData;
};

export default NutInfoParser;
// Weight: foodData.weight,
// Unit: foodData.unit,
