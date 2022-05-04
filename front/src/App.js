import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Pages/Header';
import Main from './Pages/Main';
import Recommand from './Pages/Recommands/Recommand';
import Footer from './Pages/Footer';
import BalancEat from './Pages/BalancEat';
import Userpage from './Pages/Userpage';
import RegisterForm from './component/user/RegisterForm';
import FindPw from './component/user/FindPw';
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
	background-color: #f0f1f3;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: 'center';
	max-width: 1440px;
`;

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

// display: flex;
// position: fixed;
// align-items: center;
// justify-content: center;
// height: 60px;
// width: 100%;
// top: 0px;
// z-index: 5;
// max-width: 1440px;
//	display: flex;
// align-items: center;
const App = () => {
	return (
		<Container>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path="/" element={<Main />} />
					<Route path="/balancEat" element={<BalancEat />} />
					<Route path="/recommand" element={<Recommand />} />
					<Route path="/userpage" element={<Userpage />} />
					<Route path="/register" element={<RegisterForm />} />
					<Route path="/findpw" element={<FindPw />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</Container>
	);
};

export default App;

/**
 
 */
