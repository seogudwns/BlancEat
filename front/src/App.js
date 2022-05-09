import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { userIdState, loginState } from './Pages/User/UserAtom';

import Header from './Pages/Header';
import Main from './Pages/Main';
import Recommand from './Pages/Recommands/Recommand';
import Footer from './Pages/Footer';
import BalancEat from './Pages/BalancEat';
import Userpage from './Pages/Userpage';

import theme from './Commons/theme';
import { GlobalStyle, Container } from './Commons/GlobalStyle';

const App = () => {
	const setIsLogin = useSetRecoilState(loginState);
	const setUserId = useSetRecoilState(userIdState);
	const userToken = sessionStorage.getItem('userToken');
	const userIdFromServer = sessionStorage.getItem('userId');

	const fetchUser = async () => {
		if (userToken !== null) {
			try {
				setIsLogin(true);
				setUserId(userIdFromServer);
			} catch (err) {
				console.error(err);
			}
		} else {
			try {
				setIsLogin(false);
				setUserId('');
			} catch (err) {
				console.error(err);
			}
		}
	};

	useEffect(() => {
		fetchUser();
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Container>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route exact path="/" element={<Main />} />
						<Route path="/balancEat" element={<BalancEat />} />
						<Route path="/recommand" element={<Recommand />} />
						<Route path="/userpage" element={<Userpage />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</Container>
		</ThemeProvider>
	);
};

export default App;
