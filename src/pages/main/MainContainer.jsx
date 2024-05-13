import { Search, Posts } from './components';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	return (
		<div className={className}>
			<Search />
			<Posts />
			<div>3</div>
		</div>
	);
};

export const MainPage = styled(MainContainer)`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;
