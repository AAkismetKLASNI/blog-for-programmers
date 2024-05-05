import { useEffect, useLayoutEffect } from 'react';
import { Comments, PostContent, PostEdit } from './components';
import { useServerRequest } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { loadPostAsync, RESET_POST_DATA } from '../../actions';
import { useMatch, useParams } from 'react-router-dom';
import { postSelector } from '../../selectors';
import styled from 'styled-components';

const PostContainer = ({ className }) => {
	const isEdit = useMatch('/post/:id/edit');

	const post = useSelector(postSelector);
	const requestServer = useServerRequest();
	const params = useParams();
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch]);

	useEffect(() => {
		dispatch(loadPostAsync(requestServer, params.id));
	}, [requestServer, params.id, dispatch]);

	return (
		<>
			{isEdit ? (
				<PostEdit post={post} />
			) : (
				<div className={className}>
					<PostContent post={post} />
					<Comments id={post.id} comments={post.comments} />
				</div>
			)}
		</>
	);
};

export const Post = styled(PostContainer)`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;
