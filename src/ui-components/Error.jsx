import styled from 'styled-components';

const ErrorContent = ({ children, className }) => {
	return <div className={className}>{children}</div>;
};

export const Error = styled(ErrorContent)`
	background-color: #f88a89;
	border: 1px solid black;
	padding: 10px;
`;
