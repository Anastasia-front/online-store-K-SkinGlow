import { Logo, NavigationLink } from '../ReusableComponents';
import { FooterContainer } from './Footer.styled';

export function Footer() {
	return (
		<FooterContainer id="contact" style={{ backgroundColor: 'var(--color-black)' }}>
			Footer
			<Logo color="var(--color-black)" $bgcolor="var(--color-white)" />
			<NavigationLink color="var(--color-white)" direction="column" />
		</FooterContainer>
	);
}
