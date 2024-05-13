import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
import {
	AuthorizationContainerPage,
	RegistrationContainerPage,
	UsersPage,
	PostPage,
	MainPage,
} from '../../pages';

const MainContainer = styled.main`
	width: 900px;
	margin: 150px auto;
`;

export const Main = () => {
	return (
		<MainContainer>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/login" element={<AuthorizationContainerPage />} />
				<Route path="/register" element={<RegistrationContainerPage />} />
				<Route path="/users" element={<UsersPage />} />
				<Route path="/post" element={<PostPage />} />
				<Route path="/post/:id" element={<PostPage />} />
				<Route path="/post/:id/edit" element={<PostPage />} />
				<Route path="*" element={<div>Страницы не существует</div>} />
			</Routes>
		</MainContainer>
	);
};
