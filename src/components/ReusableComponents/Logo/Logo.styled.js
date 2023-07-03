import { NavLink } from 'react-router-dom';

import { styled } from 'styled-components';

export const LogoContainer = styled.div`
	width: 255px;
	height: 52px;
`;

export const StyledLink = styled(NavLink)`
	font-family: var(--font-secondary);
	font-weight: 500;
	font-size: 40px;
	line-height: 1.3;
`;
