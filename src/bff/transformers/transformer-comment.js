export const transformerComment = (comment) => ({
	authorId: comment.author_id,
	content: comment.content,
	id: comment.id,
	postId: comment.post_id,
});
