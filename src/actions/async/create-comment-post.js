import { setLoadPost } from '../index';

export const createCommentPost =
	(requestServer, content, postId, author) => (dispatch) =>
		requestServer('createComment', content, postId, author).then(
			({ error, res }) => {
				if (error) {
					return;
				}

				dispatch(setLoadPost(res));
			},
		);
