import { setUserRole } from '../api';
import { sessions } from '../sessions';
import { ROLES } from '../constants';

export const updateUserRole = async (userSession, id, selectedRole) => {
	const accessRoles = [ROLES.ADMIN];

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	await setUserRole(id, selectedRole);

	return {
		error: null,
		res: true,
	};
};
