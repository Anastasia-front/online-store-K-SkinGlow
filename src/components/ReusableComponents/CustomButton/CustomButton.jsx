import PropTypes from 'prop-types';

import { Button } from './CustomButton';

export function CustomButton({ label, onClick, color, $bgcolor }) {
	return (
		<Button onClick={onClick} style={{ backgroundColor: $bgcolor, color: color }} type="button">
			{label}
		</Button>
	);
}

CustomButton.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	color: PropTypes.string.isRequired,
	$bgcolor: PropTypes.string.isRequired,
};
