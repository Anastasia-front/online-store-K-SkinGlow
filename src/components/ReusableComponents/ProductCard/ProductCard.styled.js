import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	height: 100%;
	transition: box-shadow var(--animat), transform var(--animat);

	&:hover,
	&:focus {
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		transform: translateY(-4px);
	}
`;

export const Favourite = styled.svg`
	position: absolute;
	top: 16px;
	right: 16px;
	fill: ${({ $isfavourite }) => ($isfavourite === 'true' ? 'var(--color-black)' : 'transparent')};
	cursor: pointer;
`;

export const ImageWrapper = styled.div`
	margin-bottom: 16px;
`;

export const Name = styled(NavLink)`
	font-size: 16px;
	line-height: 1.5;
	font-weight: 400;
	margin-bottom: 8px;
	transition: transform var(--animat);

	&:hover,
	&:focus {
		text-decoration: underline;
		font-weight: 500;
	}
`;

export const Brand = styled.p`
	font-size: 16px;
	line-height: 1.5;
	color: var(--color-dark-gray);
	margin-bottom: 16px;
`;

export const PriceInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Price = styled.p`
	font-size: 24px;
	font-weight: 500;
	line-height: 1.5;
	text-transform: capitalize;
`;

export const Bag = styled.svg`
	cursor: pointer;
	transition: transform var(--animat);

	&:hover,
	&:focus {
		transform: scale(1.5);
	}
`;
