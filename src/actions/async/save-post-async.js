import { setLoadPost } from '../index';

export const savePostAsync = (requestServer, newDataPost) => (dispatch) =>
	requestServer('savePost', newDataPost).then(({ error, res }) => {
		if (error) {
			return;
		}

		console.log(res);

		dispatch(setLoadPost(res));
	});
