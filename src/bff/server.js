import { getUser, addUser, sessions } from './index';

export const server = {
	async logout(hash) {
		sessions.remove(hash);
	},
	async authorize(authLogin, authPassword) {
		const user = await getUser(authLogin);

		if (!user) {
			return {
				error: 'Пользователя с таким логином не существует',
				res: null,
			};
		}

		if (user.password !== authPassword) {
			return {
				error: 'Пользователя с таким паролем не существует',
				res: null,
			};
		}

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				password: user.password,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},
	async register(regLogin, regPassword) {
		const user = await getUser(regLogin);

		if (user) {
			return {
				error: 'Пользователь с таким логином уже существует',
				res: null,
			};
		}

		await addUser(regLogin, regPassword);

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				password: user.password,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},
};
