import PropTypes from 'prop-types';
import styled from 'styled-components';

const H2Container = ({ children, className }) => {
	return <h2 className={className}>{children}</h2>;
};

export const H2 = styled(H2Container)`
	text-align: ${(textAlign = 'center') => textAlign};
	margin: 10px 0;
`;

H2.propTypes = {
	children: PropTypes.node.isRequired,
};
