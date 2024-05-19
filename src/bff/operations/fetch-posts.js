import { getComments, getPosts } from '../api';

export const fetchPosts = async () => {
	const [posts, comments] = await Promise.all([getPosts(), getComments()]);

	const postWithCountComments = posts.map((post) => {
		return {
			...post,
			countComments: comments.filter(({ postId }) => postId === post.id).length,
		};
	});

	return {
		error: null,
		res: postWithCountComments,
	};
};
