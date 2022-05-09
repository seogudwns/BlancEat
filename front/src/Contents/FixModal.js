import { Form } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { StyledText } from '../Contents/styleContents';
import { StyledButton } from '../Components/Styles/styleButton';
import ModalComp from '../Components/ModalComp';
import ModalPortal from '../Components/ModalPortal';
import * as Api from '../Commons/Api';
import { useRecoilValue } from 'recoil';
import { loginState, userIdState } from '../Pages/User/UserAtom';

const FixModal = ({ show, setShow, UserInfo, setUserInfo }) => {
	const [nickname, setNickname] = useState(UserInfo.nickName);
	const [weight, setWeight] = useState(UserInfo.weight);
	const [age, setAge] = useState(UserInfo.age);
	const [sex, setSex] = useState('');
	const userId = useRecoilValue(userIdState);

	const isNicknameValid = nickname?.length >= 2;
	const isWeightValid = weight > 0;
	const isAgeValid = age > 0;
	const isSexValid = sex.length > 0;
	const isFormValid = isNicknameValid && isWeightValid && isAgeValid;

	const submitUserInfoForm = async evt => {
		evt.preventDefault();
		console.log(UserInfo);
		try {
			await Api.put(`user/infoexchange/${userId}`, {
				updateInfo: {
					age: Number(age),
					weight: Number(weight),
					nickName: nickname,
				},
			});
			setShow(false);
			alert('사용자 정보 변경 완료');
			const res = await Api.get(`user/${userId}`);
			console.log(res);
			setUserInfo(res.data);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<ModalPortal>
			<ModalComp
				show={show}
				setShow={setShow}
				title="회원정보 수정"
				main={
					<Form onSubmit={submitUserInfoForm}>
						<Form.Group style={{ marginBottom: '10px' }}>
							<Form.Label>NickName</Form.Label>
							<Form.Control
								type="text"
								placeholder="사용하실 닉네임을 알려주세요."
								autoComplete="off"
								value={nickname}
								onChange={evt => setNickname(evt.target.value)}
							/>
							{!isNicknameValid ? (
								<StyledText color="red" size="1rem">
									닉네임은 두 글자 이상이어야 합니다.
								</StyledText>
							) : (
								<StyledText
									color="red"
									size="1rem"
									style={{ visibility: 'hidden' }}
								>
									닉네임은 두 글자 이상이어야 합니다.
								</StyledText>
							)}
						</Form.Group>

						<Form.Group style={{ marginBottom: '10px' }}>
							<Form.Label>Weight</Form.Label>
							<Form.Control
								type="number"
								placeholder="현재 체중을 알려주세요."
								autoComplete="off"
								value={weight}
								onChange={evt => setWeight(evt.target.value)}
							/>
							{!isWeightValid ? (
								<StyledText color="red" size="1rem">
									현재 체중을 알려주세요.
								</StyledText>
							) : (
								<StyledText
									color="red"
									size="1rem"
									style={{ visibility: 'hidden' }}
								>
									현재 체중을 알려주세요.
								</StyledText>
							)}
						</Form.Group>
						<Form.Group style={{ marginBottom: '10px' }}>
							<Form.Label>Age</Form.Label>
							<Form.Control
								type="number"
								placeholder="현재 나이를 알려주세요."
								autoComplete="off"
								value={age}
								onChange={evt => setAge(evt.target.value)}
							/>
							{!isAgeValid ? (
								<StyledText color="red" size="1rem">
									현재 나이를 설정해주세요.
								</StyledText>
							) : (
								<StyledText
									color="red"
									size="1rem"
									style={{ visibility: 'hidden' }}
								>
									현재 나이를 설정해주세요.
								</StyledText>
							)}
						</Form.Group>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<StyledButton type="submit" disabled={!isFormValid} variant="primary">
								사용자 정보 변경
							</StyledButton>
						</div>
					</Form>
				}
			></ModalComp>
		</ModalPortal>
	);
};

export default FixModal;
