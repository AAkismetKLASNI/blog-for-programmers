import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
import {
	AuthorizationContainer,
	RegistrationContainer,
	Users,
	Post,
} from '../../pages';

const MainContainer = styled.main`
	width: 900px;
	margin: 150px auto;
`;

export const Main = () => {
	return (
		<MainContainer>
			<Routes>
				<Route path="/" element={<div>Главная страница</div>} />
				<Route path="/login" element={<AuthorizationContainer />} />
				<Route path="/register" element={<RegistrationContainer />} />
				<Route path="/users" element={<Users />} />
				<Route path="/post" element={<div>Страница новой статьи</div>} />
				<Route path="/post/:id" element={<Post />} />
				<Route path="/post/:id/edit" element={<Post />} />
				<Route path="*" element={<div>Страницы не существует</div>} />
			</Routes>
		</MainContainer>
	);
};
