import { getUsers } from './index';

export const getUser = async (loginToFind) => {
	const users = await getUsers();

	return users.find((user) => (user.login === loginToFind ? user : false));
};
