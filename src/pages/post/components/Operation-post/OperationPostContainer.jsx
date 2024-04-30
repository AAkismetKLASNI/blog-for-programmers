import { Icon } from '../../../../ui-components';
import styled from 'styled-components';

const OperationPostContainer = ({ className, publishedAt, editingButton }) => {
	return (
		<div className={className}>
			<div>
				<Icon className="fa fa-calendar-o" aria-hidden="true" />
				<span>{publishedAt}</span>
			</div>
			<div>
				{editingButton}
				<Icon className="fa fa-trash-o" aria-hidden="true" />
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
