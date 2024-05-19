import { debounce } from '../../utils';
import { useMemo } from 'react';
import { Icon, Input } from '../../../../ui-components';
import styled from 'styled-components';

const SearchContainer = ({
	className,
	searchBarPhrase,
	setSearchBarPhrase,
	switchReadyPhrase,
	setSwitchReadyPhrase,
}) => {
	const startDelayedSearch = useMemo(
		() => debounce(setSwitchReadyPhrase, 2000),
		[],
	);

	const onChangeSearchBar = ({ target }) => {
		setSearchBarPhrase(target.value);
		startDelayedSearch(!switchReadyPhrase);
	};

	return (
		<div className={className}>
			<Input
				value={searchBarPhrase}
				onChange={onChangeSearchBar}
				placeholder="Поиск"
				unStrokePanel={true}
			/>
			<Icon
				fontSize="24px"
				className="fa fa-search"
				aria-hidden="true"
				unactive={true}
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
	padding: 0 10px 0 0;
	border: 1px solid #000;
`;
