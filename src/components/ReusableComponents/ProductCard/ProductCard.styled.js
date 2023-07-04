import styled, { css } from 'styled-components';

export const Container = styled.div`
	position: relative;
`;

const iconStyles = css`
	cursor: pointer;
	transition: transform var(--animat);

	&:hover,
	&:focus {
		transform: scale(1.5);
	}
`;

export const Favourite = styled.svg`
	position: absolute;
	top: 16px;
	right: 16px;
	${iconStyles}
`;

export const ImageWrapper = styled.div`
	margin-bottom: 16px;
`;

export const Name = styled.h3`
	font-size: 16px;
	line-height: 1.5;
	font-weight: 400;
	margin-bottom: 8px;
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
	${iconStyles}
`;
