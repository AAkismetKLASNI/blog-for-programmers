import { deleteComment, getComments, getPost } from '../api';
import { ROLES } from '../constants';
import { sessions } from '../sessions';

export const removeComment = async (userSession, commentId, postId) => {
	const accessRoles = [ROLES.ADMIN];

	const access = await sessions.access(userSession, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	await deleteComment(commentId);

	const post = await getPost(postId);

	const comments = await getComments(postId);

	return {
		error: null,
		res: {
			...post,
			comments,
		},
	};
};
