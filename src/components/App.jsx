import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';

const Main = lazy(() => import('../pages/Main'));

export function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Main />} />
			</Route>
		</Routes>
	);
}
