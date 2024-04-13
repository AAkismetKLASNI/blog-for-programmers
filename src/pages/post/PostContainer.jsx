import { useEffect } from 'react';
import { Comments, PostContent } from './components';
import { useServerRequest } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { loadPostAsync, loadCommentsAsync } from '../../actions';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const PostContainer = ({ className }) => {
	const params = useParams();

	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	useEffect(() => {
		dispatch(loadPostAsync(requestServer, params.id));
		dispatch(loadCommentsAsync(requestServer, params.id));
	}, [requestServer, params.id]);

	const post = useSelector((state) => state.post);

	const { id, title, imageUrl, publishedAt, content } = post;

	return (
		<>
			<div className={className}>
				<PostContent
					id={id}
					title={title}
					imageUrl={imageUrl}
					publishedAt={publishedAt}
					content={content}
				/>
				<Comments id={id} />
			</div>
		</>
	);
};

export const Post = styled(PostContainer)`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;
