import { useEffect } from 'react';
import { Comments, PostContent } from './components';
import { useServerRequest } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { loadPostAsync } from '../../actions';
import { useParams } from 'react-router-dom';
import { postSelector } from '../../selectors';
import styled from 'styled-components';

const PostContainer = ({ className }) => {
	const post = useSelector(postSelector);
	const requestServer = useServerRequest();
	const params = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadPostAsync(requestServer, params.id));
	}, [requestServer, params.id, dispatch]);

	return (
		<>
			<div className={className}>
				<PostContent post={post} />
				<Comments id={post.id} comments={post.comments} />
			</div>
		</>
	);
};

export const Post = styled(PostContainer)`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;
