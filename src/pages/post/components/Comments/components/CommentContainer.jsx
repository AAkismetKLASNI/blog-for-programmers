import { Icon } from '../../../../../ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { removeCommentAsync } from '../../../../../actions';
import { useServerRequest } from '../../../../../hooks';
import { postIdSelector, roleIdSelector } from '../../../../../selectors';
import { ROLES } from '../../../../../constants';
import styled from 'styled-components';

const CommentContainer = ({ className, content, id, publishedAt, author }) => {
	const dispatch = useDispatch();
	const postId = useSelector(postIdSelector);
	const roleId = useSelector(roleIdSelector);
	const requestServer = useServerRequest();

	const onDeleteComment = (commentId) => {
		requestServer('removeComment', commentId);
		dispatch(removeCommentAsync(requestServer, commentId, postId));
	};

	return (
		<>
			<div className={className}>
				<div className="comment-block">
					<div className="comment-info">
						<div>
							<Icon className="fa fa-user-circle-o" aria-hidden="true" />
							<span>{author}</span>
						</div>
						<div>
							<Icon className="fa fa-calendar-o" aria-hidden="true" />
							<span>{publishedAt}</span>
						</div>
					</div>
					<p>{content}</p>
				</div>
				<div className="remove-opetation">
					<Icon
						className="fa fa-trash-o"
						aria-hidden="true"
						onClick={() => onDeleteComment(id)}
						dataInvisible={ROLES.GUEST === roleId}
					/>
				</div>
			</div>
		</>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	gap: 5px;

	& .comment-block {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 700px;
		border: 1px solid black;
		padding: 10px;
	}

	& .comment-info {
		display: flex;
		justify-content: space-between;
	}

	& .comment-info * {
		display: flex;
		gap: 10px;
		align-items: center;
	}

	& .remove-opetation {
		width: 20px;
	}
`;