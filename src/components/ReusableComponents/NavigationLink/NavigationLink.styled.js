import { NavLink } from 'react-router-dom';

import { styled } from 'styled-components';

export const NavList = styled.ul`
	display: flex;
	gap: 24px;
`;

export const StyledLink = styled(NavLink)`
	font-size: 20px;
	line-height: 1.5;
`;
