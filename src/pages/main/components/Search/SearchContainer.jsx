import styled from 'styled-components';
import { Icon, Input } from '../../../../ui-components';

const SearchContainer = ({ className }) => {
	return (
		<div className={className}>
			<Input placeholder="Поиск" />
			<Icon
				fontSize="24px"
				className="fa fa-sign-out"
				aria-hidden="true"
			></Icon>
		</div>
	);
};

export const Search = styled(SearchContainer)`
	width: 300px;
	display: flex;
	margin: 0 auto;
	gap: 10px;
	align-items: center;
`;
