import { ROLES } from '../constants';
import { removeComment } from './session-methods';

export const createSession = (roleId) => {
	const session = {
		logout() {
			Object.keys(session).map((key) => delete session[key]);
		},
	};

	switch (roleId) {
		case ROLES.ADMIN: {
			session.removeComment = removeComment;
			break;
		}
		case ROLES.MODERATOR: {
			session.removeComment = removeComment;
			break;
		}
		case ROLES.READER: {
			break;
		}
		default:
	}

	return session;
};
