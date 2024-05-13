import { transformerPost } from '../transformers';

export const getPosts = () =>
	fetch('http://localhost:3600/posts')
		.then((loadedPosts) => loadedPosts.json())
		.then((posts) => posts && posts.map(transformerPost));
