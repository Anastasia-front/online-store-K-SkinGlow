import PropTypes from 'prop-types';

import { Button } from './CustomButtom';

export function CustomButton({ label, onClick, color, $bgcolor }) {
	return (
		<Button onClick={onClick} style={{ backgroundColor: $bgcolor, color: color }}>
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
