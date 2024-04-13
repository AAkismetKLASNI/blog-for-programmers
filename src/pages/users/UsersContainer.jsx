import { useEffect, useState } from 'react';
import { H2, Content } from '../../ui-components';
import { User } from './components/UserLayout';
import { useServerRequest } from '../../hooks';
import { ROLES } from '../../bff/constants';
import styled from 'styled-components';

const UsersContainer = ({ className }) => {
	const [roles, setRoles] = useState([]);
	const [users, setUsers] = useState([]);
	const [errorFetch, setErrorFetch] = useState(null);
	const [switchDeleteUser, setSwitchDeleteUser] = useState(false);

	const requestServer = useServerRequest();

	const onDeleteUser = (userId) => {
		requestServer('requestDeleteUser', userId).then(() =>
			setSwitchDeleteUser(!switchDeleteUser),
		);
	};

	useEffect(() => {
		Promise.all([
			requestServer('fetchRoles'),
			requestServer('fetchUsers'),
		]).then(([rolesRes, usersRes]) => {
			if (rolesRes.error || usersRes.error) {
				setErrorFetch(rolesRes.error || usersRes.error);
				return;
			}

			setRoles(rolesRes.res);
			setUsers(usersRes.res);
		});
	}, [requestServer, switchDeleteUser]);

	return (
		<div className={className}>
			<Content error={errorFetch}>
				<H2>Пользователи</H2>
				<div className="table-container">
					<div className="table-titles">
						<span>Логин</span>
						<span>Дата регистрации</span>
						<span>Роль</span>
					</div>
					<ul className="table-content">
						{users.map(({ id, login, registeredAt, roleId }) => {
							return (
								<User
									id={id}
									key={id}
									login={login}
									registeredAt={registeredAt}
									roles={roles.filter(({ id }) => id !== ROLES.GUEST)}
									roleId={roleId}
									onDeleteUser={onDeleteUser}
								/>
							);
						})}
					</ul>
				</div>
			</Content>
		</div>
	);
};

export const Users = styled(UsersContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 35px;

	& .table-container,
	.table-content {
		display: flex;
		flex-direction: column;
	}

	& .table-content {
		gap: 10px;
	}

	& .table-item {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	& .table-titles {
		padding: 10px;
	}

	& .table-titles span {
		display: inline-block;
		width: 170px;
	}

	& .info-user {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 2px solid black;
		padding: 10px;
		width: 100%;
	}

	& .info-user span {
		width: 170px;
	}

	& .options-user {
		display: flex;
		align-items: center;
		gap: 10px;
		width: 160px;
	}

	& .options-user select {
		height: 30px;
		width: 100%;
		font-size: 16px;
	}
`;
