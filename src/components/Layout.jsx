import { Outlet } from 'react-router-dom';
// import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	padding-left: 15px;
	padding-right: 15px;
	margin-right: auto;
	margin-left: auto;

	@media screen and (min-width: 320px) {
		width: 320px;
	}

	@media screen and (min-width: 480px) {
		width: 480px;
	}

	@media screen and (min-width: 768px) {
		width: 768px;
	}
	@media screen and (min-width: 1200px) {
		width: 1200px;
	}
`;

export const Layout = () => {
	return (
		<Wrapper>
			{/* <AppBar /> */}
			<Suspense fallback={null}>
				<Outlet />
			</Suspense>
			<Toaster position="top-right" reverseOrder={false} />
		</Wrapper>
	);
};
