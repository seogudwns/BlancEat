/* 백엔드에서 들어오는 비구조화된 데이터를 다루기 쉽게 구조화 시킨다 */
import { BlankImageURL } from '../../Commons/consts';
const NutInfoParser = foodData => {
	const newData = {
		foodName: foodData.foodName,
		ImgURL: foodData.ImgURL || BlankImageURL,
		ENERGY: { Cal: foodData.Cal },
		MAJORNUTS: { Carbon: foodData.Carbon },
		SNF: { Sugar: foodData.Sugar, Fiber: foodData.Fiber },
		INORGANICS: { Ca: foodData.Ca, Na: foodData.Na, Fe: foodData.Fe, Zn: foodData.Zn },
		VITAMINS: {
			VitA: foodData.VitA,
			VitB6: foodData.VitB6,
			VitC: foodData.VitC,
			VitE: foodData.VitE,
			Niacin: foodData.Niacin,
			Folate: foodData.Folate,
		},
	};
	return newData;
};

export default NutInfoParser;
