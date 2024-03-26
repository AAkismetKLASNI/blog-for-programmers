import { ACTION_TYPE } from '../actions';
import { ROLES } from '../constants';

const initialUserState = {
	login: null,
	id: null,
	roleId: ROLES.GUEST,
	session: null,
};

export const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_USER: {
			return { ...state, ...action.payload };
		}
		case ACTION_TYPE.DELETE_USER: {
			return { ...state };
		}

		default:
			return state;
	}
};
