import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../../bff';
import { useState } from 'react';
import { Input, Button, Error } from '../../components/index';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserAction } from '../../actions';
import styled from 'styled-components';

const authorizationSceme = yup.object().shape({
	login: yup
		.string()
		.matches(/^\w+$/, 'Недопустимые символы в логине.')
		.min(3, 'Неверно введен логин. Не меньше 3 символов')
		.max(15, 'Неверно введен логин. Не больше 15 символов')
		.required('Введите логин'),
	password: yup
		.string()
		.matches(/^[\w#%]+$/, 'Недопустимые символы в пароле')
		.min(6, 'Неверно введен пароль. Не меньше 6 символов')
		.max(30, 'Неверно введен пароль. Не больше 30 символов')
		.required('Введите пароль'),
});

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

export const Authorization = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: { login: '', password: '' },
		resolver: yupResolver(authorizationSceme),
	});

	const [serverError, setServerError] = useState(null);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const formError = errors?.login?.message || errors?.password?.message;
	const error = serverError || formError;

	const onSubmit = ({ login, password }) => {
		server.authorize(login, password).then(({ error, res }) => {
			if (error) {
				setServerError(error);
				return;
			}

			dispatch(setUserAction(res));

			navigate('/');
		});
	};

	return (
		<AuthorizationContent>
			<h2>Авторизация</h2>
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
