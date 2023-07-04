/* eslint-disable indent */
import { HashLink } from 'react-router-hash-link';

import { styled } from 'styled-components';

export const NavList = styled.ul`
	display: flex;
	gap: ${({ style }) => (style.flexDirection === 'row' ? '24px' : '16px')};
`;

export const StyledLink = styled(HashLink)`
	position: relative;
	font-size: 20px;
	line-height: 1.5;
	padding: 3px;
	transition: var(--animat);

	&::before {
		content: '';
		position: absolute;
		background-color: ${({ style }) =>
			style.color === 'var(--color-black)' ? 'var(--color-black)' : 'var(--color-white)'};
		width: 0;
		height: 3px;
		bottom: 0;
		left: 0;
		transition: var(--animat);
	}

	&:hover::before,
	&:focus::before {
		width: 100%;
	}
`;
