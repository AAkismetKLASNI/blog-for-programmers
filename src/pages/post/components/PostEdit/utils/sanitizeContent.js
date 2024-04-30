export const sanitizeContent = (content) =>
	content
		.replaceAll('<div><br></div><div>', '\\n\\n')
		.replaceAll('<div>', '\\n')
		.replaceAll('</div>', '');
