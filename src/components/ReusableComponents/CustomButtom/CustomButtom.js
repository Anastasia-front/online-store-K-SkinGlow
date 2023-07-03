/* eslint-disable indent */
import { styled } from 'styled-components';

export const Button = styled.button`
	width: 220px;
	height: 50px;
	background-color: ${({ $bgcolor }) => $bgcolor};
	padding: 13px;
	cursor: pointer;

	color: ${({ color }) => color};
	font-size: 16px;
	line-height: 1.5;
	text-align: center;

	border: ${({ color }) => (color === 'var(--color-black)' ? '1px solid var(--color-black)' : 'none')};
	transition: color var(--animat), background-color var(--animat), border var(--animat);

	&:hover,
	&:focus {
		color: ${({ color }) => (color === 'var(--color-white)' ? 'var(--color-black)' : 'var(--color-white)')};
		background-color: ${({ $bgcolor }) =>
			$bgcolor === 'var(--color-black)' ? 'var(--color-white)' : 'var(--color-black)'};
		border: ${({ color }) => (color === 'var(--color-white)' ? '1px solid var(--color-black)' : 'none')};
	}
`;
