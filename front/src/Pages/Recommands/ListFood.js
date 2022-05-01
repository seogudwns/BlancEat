const ListFood = foodlist => {
	//const newList = [...foodlist];
	let listTags = [];
	// [].forEach.call(newList, (element, i) => {
	// 	console.log(i, element.text);
	// 	listTags.push(<li key={i}>{element?.text}</li>);
	// });
	//현재 사용되지 않고 있음. 버그수정이후 활용예정
	console.log('리스트 푸드에 들어왔다');
	console.log(foodlist[0]);
	console.log('--------------------');
	console.log('오브젝트 길이', Object.keys(foodlist).length);
	for (const [id, text] of Object.entries(foodlist)) console.log(id, text);

	console.log(typeof foodlist);
	return (
		<div>
			<ul>{listTags}</ul>
			<ul>
				<li>hi</li>
				<li>hi</li>
				<li>hi</li>
				<li>hi</li>
			</ul>
		</div>
	);
};

export default ListFood;
