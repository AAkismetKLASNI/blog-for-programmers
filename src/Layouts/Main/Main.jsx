import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
import { Authorization } from '../../pages';

const MainContainer = styled.main`
	width: 900px;
	margin: 150px auto;
`;

export const Main = () => {
	return (
		<MainContainer>
			<Routes>
				<Route path="/" element={<div>Главная страница</div>} />
				<Route path="/login" element={<Authorization />} />
				<Route path="/register" element={<div>Страница регистрации</div>} />
				<Route path="/users" element={<div>Страница пользователей</div>} />
				<Route path="/post" element={<div>Страница новой статьи</div>} />
				<Route path="/post/:post_id" element={<div>Страница cтатьи</div>} />
				<Route path="*" element={<div>Страницы не существует</div>} />
			</Routes>
		</MainContainer>
	);
};
