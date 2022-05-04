import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './Pages/Header';
import Main from './Pages/Main';
import Recommand from './Pages/Recommands/Recommand';
import Footer from './Pages/Footer';
import BalancEat from './Pages/BalancEat';
import Userpage from './Pages/Userpage';

import theme from './Commons/theme';
import { GlobalStyle, Container } from './Commons/GlobalStyle';

const App = () => {
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
