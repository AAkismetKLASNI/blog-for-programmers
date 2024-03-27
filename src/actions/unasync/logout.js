import { ACTION_TYPE } from '../action-type';
import { server } from '../../bff/server';

export const logout = (hash) => {
	server.logout(hash);

	return {
		type: ACTION_TYPE.LOGOUT,
	};
};
