import { Logo } from '../ReusableComponents';
import { HeaderContainer } from './Header.styled';

export function Header() {
	return (
		<HeaderContainer>
			<Logo color="var(--color-white)" $bgcolor="var(--color-black)" />
		</HeaderContainer>
	);
}
