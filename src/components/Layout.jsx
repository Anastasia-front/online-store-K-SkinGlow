import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { styled } from 'styled-components';

import { device } from '../utils/breakpoints';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

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

function Layout() {
	return (
		<Wrapper>
			<Header />
			<Suspense fallback={null}>
				<Outlet />
			</Suspense>
			<Footer />
		</Wrapper>
	);
}

export default Layout;
