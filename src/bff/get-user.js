export const getUser = async (loginToFind) =>
	fetch(`http://localhost:3600/users?login=${loginToFind}`)
		.then((loadedData) => loadedData.json())
		.then(([user]) => user)
		.catch(() => console.log('подключи порт'));
