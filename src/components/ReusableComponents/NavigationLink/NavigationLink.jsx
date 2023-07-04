import { NavList, StyledLink } from './NavigationLink.styled';

export function NavigationLink() {
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
			<NavList>
				{links.map(({ link, text }, index) => (
					<li key={index}>
						<StyledLink to={link}>{text}</StyledLink>
					</li>
				))}
			</NavList>
		</nav>
	);
}
