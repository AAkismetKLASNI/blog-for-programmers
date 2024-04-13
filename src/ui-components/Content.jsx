import { H2 } from './H2';

export const Content = ({ children, error }) => {
	return error ? (
		<>
			<H2>Ошибка</H2>
			<p>{error}</p>
		</>
	) : (
		children
	);
};
