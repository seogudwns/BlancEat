import axios from 'axios';

const portNumber = '5001';
const url = `http://${window.location.hostname}:${portNumber}/`;

const get = async (endpoint, params = '') => {
	console.log(`GET 요청 : ${url + endpoint + '/' + params}`);

	return axios.get(
		+endpoint + '/' + params,
		// jwt 토큰 사용 시 아래 코드 주석 삭제
		//     {
		//     headers: {
		//         Authorization : `Bearer ${sessionStorage.getItem("userToken")}`,
		//     },
		// }
	);
};

const post = async (endpoint, data) => {
	const bodyData = JSON.stringify(data);
	console.log(`POST 요청 : ${url + endpoint}`);
	console.log(`POST 데이터 : ${bodyData}`);

	return axios.post(
		url + endpoint,
		bodyData,
		// jwt 토큰 사용 시 아래 코드 주석 삭제
		//     {
		// 	headers: {
		// 		'Content-type': 'application/json',
		// 		Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
		// 	},
		// }
	);
};

const put = async (endpoint, data) => {
	const bodyData = JSON.stringify(data);
	console.log(`PUT 요청 : ${url + endpoint}`);
	console.log(`PUT 데이터 : ${bodyData}`);

	return axios.put(
		url + endpoint,
		bodyData,
		// jwt 토큰 사용 시 아래 코드 주석 삭제
		//     {
		// 	headers: {
		// 		'Content-type': 'application/json',
		// 		Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
		// 	},
		// }
	);
};

const del = async (endpoint, params = '') => {
	console.log(`DELETE 요청 : ${url + endpoint + '/' + params}`);

	return axios.delete(
		+endpoint + '/' + params,
		// jwt 토큰 사용 시 아래 코드 주석 삭제
		//     {
		//     headers: {
		//         Authorization : `Bearer ${sessionStorage.getItem("userToken")}`,
		//     },
		// }
	);
};

export { get, post, put, del as delete };
