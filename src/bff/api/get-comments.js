import { transformerComment } from '../transformers';

export const getComments = (postId) =>
	fetch(`http://localhost:3600/comments?post_id=${postId}`)
		.then((res) => res.json())
		.then(
			(loadedComment) => loadedComment && loadedComment.map(transformerComment),
		);
