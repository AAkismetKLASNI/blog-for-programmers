import { ACTION_TYPE } from '../action-type';
import { server } from '../../bff/server';

export const deleteSession = (hash) => {
	server.logout(hash);

	return {
		type: ACTION_TYPE.DELETE_USER,
	};
};
