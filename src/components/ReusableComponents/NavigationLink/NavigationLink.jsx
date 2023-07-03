import { NavList, StyledLink } from './NavigationLink.styled';

export function NavigationLink() {
	const links = [
		{
			text: 'Catalog',
			link: '/',
		},
		{
			text: 'Order & Delivery',
			link: '/',
		},
		{
			text: 'Contact Us',
			link: '/',
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
