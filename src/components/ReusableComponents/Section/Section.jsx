import PropTypes from 'prop-types';

import { StyleSection, Title } from './Section.styled';

export function Section({ title, children }) {
	return (
		<StyleSection>
			<Title>{title}</Title>
			{children}
		</StyleSection>
	);
}

Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
