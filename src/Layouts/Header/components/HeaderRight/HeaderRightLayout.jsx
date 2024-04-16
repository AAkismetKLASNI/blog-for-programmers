import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { ROLES } from '../../../../constants';
import { useSelector, useDispatch } from 'react-redux';
import {
	loginSelector,
	roleIdSelector,
	sessionSelector,
} from '../../../../selectors';
import { logout } from '../../../../actions';

const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	min-width: 100px;
`;

const Button = styled.button`
	width: 100%;
	height: 40px;
	cursor: pointer;
`;

const ControlPanel = styled.div`
	font-size: 24px;
	display: flex;
	gap: 10px;
	justify-content: end;
`;

const UserPanel = styled.div`
	display: flex;
	justify-content: end;
	gap: 5px;
	font-size: 20px;
`;

export const HeaderRightLayout = () => {
	const roleId = useSelector(roleIdSelector);
	const login = useSelector(loginSelector);
	const session = useSelector(sessionSelector);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onLogout = () => {
		sessionStorage.removeItem('userData');
		dispatch(logout(session));
	};

	return (
		<Content>
			{roleId === ROLES.GUEST ? (
				<NavLink to="/login">
					<Button>Войти</Button>
				</NavLink>
			) : (
				<UserPanel>
					<h4>{login}</h4>
					<NavLink to="/login" onClick={onLogout}>
						<i className="fa fa-sign-out" aria-hidden="true"></i>
					</NavLink>
				</UserPanel>
			)}

			<ControlPanel>
				<i
					style={{ cursor: 'pointer' }}
					onClick={() => navigate(-1, { replace: true })}
					className="fa fa-backward"
					aria-hidden="true"
				></i>
				{roleId === ROLES.ADMIN ? (
					<>
						<NavLink to="/post">
							<i className="fa fa-file-text-o" aria-hidden="true"></i>
						</NavLink>
						<NavLink to="/users">
							<i className="fa fa-users" aria-hidden="true"></i>
						</NavLink>
					</>
				) : null}
			</ControlPanel>
		</Content>
	);
};
