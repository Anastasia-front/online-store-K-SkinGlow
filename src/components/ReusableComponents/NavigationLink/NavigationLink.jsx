import PropTypes from 'prop-types';

import { NavList, StyledLink } from './NavigationLink.styled';

export function NavigationLink({ color, direction }) {
	const links = [
		{
			text: 'Catalog',
			link: '#catalog',
		},
		{
			text: 'Order & Delivery',
			link: '#orderDelivery',
		},
		{
			text: 'Contact Us',
			link: '#contact',
		},
	];

	return (
		<nav>
			<NavList style={{ flexDirection: direction }}>
				{links.map(({ link, text }, index) => (
					<li key={index}>
						<StyledLink to={link} style={{ color: color }}>
							{text}
						</StyledLink>
					</li>
				))}
			</NavList>
		</nav>
	);
}

NavigationLink.propTypes = {
	color: PropTypes.string.isRequired,
	direction: PropTypes.string.isRequired,
};
