import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import BalancEat from './component/BalancEat';
import UserPage from './component/UserPage';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/balancEat" element={<BalancEat />} />
					<Route path="/userpage" element={<UserPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App;
