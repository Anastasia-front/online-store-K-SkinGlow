import PropTypes from 'prop-types';

import { LogoContainer, StyledLink } from './Logo.styled';

export function Logo({ color, $bgcolor }) {
	return (
		<LogoContainer style={{ backgroundColor: $bgcolor }}>
			<StyledLink to="/" style={{ color: color }}>
				K-SkinGlow
			</StyledLink>
		</LogoContainer>
	);
}

Logo.propTypes = {
	color: PropTypes.string.isRequired,
	$bgcolor: PropTypes.string.isRequired,
};
