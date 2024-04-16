import { transformerComments } from '../transformers';

export const getComments = async (postId) =>
	fetch(`http://localhost:3600/comments?post_id=${postId}`)
		.then((res) => res.json())
		.then(
			(loadedComments) =>
				loadedComments && loadedComments.map(transformerComments),
		)
		.then((loadedComments) => loadedComments.reverse());
