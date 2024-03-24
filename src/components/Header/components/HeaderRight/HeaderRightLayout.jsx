import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';

const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const Button = styled.button`
	width: 100px;
	height: 30px;
`;

const ControlPanel = styled.div`
	font-size: 24px;
	display: flex;
	gap: 10px;
`;

export const HeaderRightLayout = () => {
	const navigate = useNavigate();

	return (
		<Content>
			<NavLink to="/login">
				<Button>Войти</Button>
			</NavLink>

			<ControlPanel>
				<i
					style={{ cursor: 'pointer' }}
					onClick={() => navigate(-1, { replace: true })}
					class="fa fa-backward"
					aria-hidden="true"
				></i>
				<NavLink to="/post">
					<i class="fa fa-file-text-o" aria-hidden="true"></i>
				</NavLink>
				<NavLink to="/users">
					<i class="fa fa-users" aria-hidden="true"></i>
				</NavLink>
			</ControlPanel>
		</Content>
	);
};
