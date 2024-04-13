import { getComments } from '../api';

export const fetchComments = async (postId) => {
	const comments = await getComments(postId);

	console.log(comments);

	return {
		error: null,
		res: comments,
	};
};
