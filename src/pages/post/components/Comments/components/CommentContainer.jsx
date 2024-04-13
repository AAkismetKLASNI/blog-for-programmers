import { Icon } from '../../../../../ui-components';
import styled from 'styled-components';

const CommentContainer = ({ className, content }) => {
	return (
		<>
			<div className={className}>
				<div className="comment-block">
					<div className="comment-info">
						<div>
							<Icon className="fa fa-user-circle-o" aria-hidden="true" />
							<span>login</span>
						</div>
						<div>
							<Icon className="fa fa-calendar-o" aria-hidden="true" />
							<span>20-20-20</span>
						</div>
					</div>
					<p>{content}</p>
				</div>
				<Icon className="fa fa-trash-o" aria-hidden="true" />
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
`;
