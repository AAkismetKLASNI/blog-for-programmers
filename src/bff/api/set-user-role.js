export const setUserRole = (userId, selectedRole) =>
	fetch(`http://localhost:3600/users/${userId}`, {
		method: 'PATCH',
		headers: {
			'Content-type': 'application/json:charset=utf-8',
		},
		body: JSON.stringify({
			role_id: selectedRole,
		}),
	});
