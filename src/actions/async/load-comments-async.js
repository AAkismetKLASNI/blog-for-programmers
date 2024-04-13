import { setLoadPost } from '../index';

export const loadCommentsAsync = (requestServer, postId) => (dispatch) => {
	requestServer('fetchComments', postId).then(({ error, res }) => {
		if (error) {
			return;
		}

		dispatch(setLoadPost(res));
	});
};
