const initialUsersState = [
	{
		login: null,
		id: null,
		roleName: null,
		userRegisteredAt: null,
	},
];

export const usersReducer = (state = initialUsersState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
