import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Main />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App;
