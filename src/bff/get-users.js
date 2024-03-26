export const getUsers = () =>
	fetch('http://localhost:3600/users')
		.then((loadedData) => loadedData.json())
		.catch(() => console.log('подключи порт'));
