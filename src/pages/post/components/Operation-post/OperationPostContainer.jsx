import { Icon } from '../../../../ui-components';
import { useServerRequest } from '../../../../hooks';
import { CLOSE_MODAL, removePostAsync, openModal } from '../../../../actions';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const OperationPostContainer = ({
	id,
	className,
	publishedAt,
	editingButton,
}) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const navigate = useNavigate();

	const onDeletePost = (id) => {
		dispatch(
			openModal({
				questionText: 'Вы действительно хотите удалить пост',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, id)).then(() =>
						navigate('/'),
					);
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<div className={className}>
			<div>
				{publishedAt && (
					<Icon
						className="fa fa-calendar-o"
						aria-hidden="true"
						unactive={true}
					/>
				)}
				<span>{publishedAt}</span>
			</div>
			<div>
				{editingButton}
				{publishedAt && (
					<Icon
						className="fa fa-trash-o"
						aria-hidden="true"
						onClick={() => onDeletePost(id)}
					/>
				)}
			</div>
		</div>
	);
};

export const OperationPost = styled(OperationPostContainer)`
	display: flex;
	justify-content: space-between;
	margin: 20px 0;

	& * {
		display: flex;
		gap: 10px;
		align-items: center;
	}
`;
