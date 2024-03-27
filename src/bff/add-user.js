import { generateDate } from './index';

export const addUser = (login, password) =>
	fetch('http://localhost:3600/users', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json:charset=utf-8',
		},
		body: JSON.stringify({
			login,
			password,
			role_id: '2',
			resistered_at: generateDate(),
		}),
	}).then((loadedUser) => loadedUser.json());
