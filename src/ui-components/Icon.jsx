import styled from 'styled-components';

const IconContainer = ({ className, ...props }) => {
	return <i className={className} {...props}></i>;
};

export const Icon = styled(IconContainer)`
	font-size: ${({ fontSize = '20px' }) => fontSize};
	color: ${({ disabled }) => (disabled ? '#ccc' : '#000')};
	cursor: pointer;
`;
