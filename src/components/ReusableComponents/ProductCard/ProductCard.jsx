import { useState } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import icons from '../../../assets/sprite.svg';
import { Bag, Brand, Container, Favourite, ImageWrapper, Name, Price, PriceInfo } from './ProductCard.styled';

export function ProductCard({ imagePath, width, productName, brand, price }) {
	const [isFavourite, setIsFavourite] = useState(false);

	const handleFavouriteToggle = () => {
		setIsFavourite(!isFavourite);
	};

	return (
		<Container>
			<ImageWrapper>
				<Link to="/">
					<img src={imagePath} alt="product" width={width} height="355" />
				</Link>
				<Favourite width={24} height={24} $isfavourite={isFavourite.toString()} onClick={handleFavouriteToggle}>
					<use href={icons + '#favourite'} />
				</Favourite>
			</ImageWrapper>
			<div>
				<Name>{productName}</Name>
				<Brand>{brand}</Brand>
				<PriceInfo>
					<Price>{price} UAH</Price>
					<Bag width={24} height={24}>
						<use href={icons + '#bag'} />
					</Bag>
				</PriceInfo>
			</div>
		</Container>
	);
}

ProductCard.propTypes = {
	imagePath: PropTypes.string.isRequired,
	width: PropTypes.string.isRequired,
	productName: PropTypes.string.isRequired,
	brand: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
};
