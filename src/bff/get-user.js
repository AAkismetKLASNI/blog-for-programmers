import { getUsers } from './index';

export const getUser = async (loginToFind) => {
	const users = await getUsers();

	return users.map(({ login }) => login === loginToFind);
};
