import { HashLink } from 'react-router-hash-link';

import { styled } from 'styled-components';

export const NavList = styled.ul`
	display: flex;
	gap: 24px;
`;

export const StyledLink = styled(HashLink)`
	font-size: 20px;
	line-height: 1.5;
`;
