import styled from 'styled-components';
import { Header, Footer, Main } from './Layouts';

const BlogContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	margin: 0 auto;
	min-height: 100%;
	background-color: #fff;
`;

export const Blog = () => {
	return (
		<BlogContainer>
			<Header />
			<Main />
			<Footer />
		</BlogContainer>
	);
};
