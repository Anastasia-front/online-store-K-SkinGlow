import { Logo, NavigationLink } from '../ReusableComponents';
import { HeaderContainer } from './Header.styled';

export function Header() {
	return (
		<HeaderContainer>
			<NavigationLink color="var(--color-black)" direction="row" />
			<Logo color="var(--color-white)" $bgcolor="var(--color-black)" />
			<div>Icons</div>
		</HeaderContainer>
	);
}
