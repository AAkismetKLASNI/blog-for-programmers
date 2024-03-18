import { Route, Routes } from 'react-router-dom';

export const Main = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<div>Главная страница</div>} />
				<Route path="/login" element={<div>Страница входа</div>} />
				<Route path="/register" element={<div>Страница регистрации</div>} />
				<Route path="/users" element={<div>Страница пользователей</div>} />
				<Route path="/post" element={<div>Страница новой статьи</div>} />
				<Route path="/post/:post_id" element={<div>Страница cтатьи</div>} />
				<Route path="*" element={<div>Страницы не существует</div>} />
			</Routes>
		</>
	);
};
