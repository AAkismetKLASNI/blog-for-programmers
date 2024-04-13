import { sessions } from '../sessions';
import { getRoles } from '../api';
import { ROLES } from '../constants';

export const fetchRoles = async (userSession) => {
	console.log('userSession', userSession);

	const accessRoles = [ROLES.ADMIN];

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	const roles = await getRoles();

	return {
		error: null,
		res: roles,
	};
};
