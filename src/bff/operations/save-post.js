import { ROLES } from '../constants';
import { updateDataPost } from '../api';
import { sessions } from '../sessions';

export const savePost = async (session, newData) => {
	const accessRoles = [ROLES.ADMIN];

	const access = sessions.access(session, accessRoles);

	if (!access) {
		return {
			error: 'Недостаточно прав',
			res: null,
		};
	}

	const updatePost = await updateDataPost(newData);

	return {
		error: null,
		res: updatePost,
	};
};
