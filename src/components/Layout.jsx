// import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { styled } from 'styled-components';

import { device } from '../utils/breakpoints';

const Wrapper = styled.div`
	width: 100%;
	padding-left: 15px;
	padding-right: 15px;
	margin-right: auto;
	margin-left: auto;

	@media ${device.mobile} {
		width: 360px;
	}

	@media ${device.tablet} {
		width: 768px;
	}
	@media ${device.laptop} {
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
			{/* <Footer/> */}
		</Wrapper>
	);
};
