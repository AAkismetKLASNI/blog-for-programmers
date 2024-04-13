import { Input, Button, Error, H2 } from '../../ui-components/index';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const AuthorizationForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 300px;
	gap: 10px;
`;

const AuthorizationContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 35px;
`;

const RegisterLink = styled(NavLink)`
	text-decoration: underline;
`;

export const AuthorizationLayout = ({
	register,
	handleSubmit,
	error,
	onSubmit,
	formError,
	setServerError,
}) => {
	return (
		<AuthorizationContent>
			<H2>Авторизация</H2>
			<AuthorizationForm onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					placeholder="Логин..."
					{...register('login', { onChange: () => setServerError(null) })}
				/>
				<Input
					type="password"
					placeholder="Пароль..."
					{...register('password')}
				/>
				<Button disabled={!!formError} backgroundColor="#AFAFAF">
					Авторизация
				</Button>
				{error && <Error>{error}</Error>}
			</AuthorizationForm>
			<RegisterLink to="/register">Регистрация</RegisterLink>
		</AuthorizationContent>
	);
};
