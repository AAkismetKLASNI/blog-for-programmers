import { transformerPost } from '../transformers';

export const getPost = async (postId) =>
	fetch(`http://localhost:3600/posts?id=${postId}`)
		.then((loadedPost) => loadedPost.json())
		.then(([loadedPost]) => loadedPost && transformerPost(loadedPost))
		.catch(() => console.log('пост не получен!'));
