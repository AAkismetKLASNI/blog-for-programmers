import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useServerRequest } from '../../../../hooks';
import { loadCommentsAsync } from '../../../../actions/index';
import { Icon } from '../../../../ui-components';
import { Comment } from './components';
import styled from 'styled-components';

const CommentsContainer = ({ className, id }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	// useEffect(() => {

	// }, [requestServer, id]);

	const comments = [
		{
			id: '023',
			content: 'пост имба круче некуда ееееееее',
			postId: 'a0cf',
			authorId: '0ecc',
		},
	];

	return (
		<>
			<div className={className}>
				<div className="create-new-comment-block">
					<textarea
						className="field-new-comment"
						placeholder="Комментарий..."
					></textarea>
					<Icon className="fa fa-paper-plane-o" aria-hidden="true" />
				</div>
				<ul>
					{comments.map(({ id, content }) => {
						return <Comment key={id} content={content} />;
					})}
				</ul>
			</div>
		</>
	);
};

export const Comments = styled(CommentsContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	& .create-new-comment-block {
		display: flex;
		gap: 5px;
	}

	& .field-new-comment {
		max-width: 700px;
		max-height: 160px;
		min-width: 700px;
		min-height: 160px;
		padding: 10px;
		font-size: 18px;
	}
`;
