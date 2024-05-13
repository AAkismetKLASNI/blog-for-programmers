import { useEffect, useState } from 'react';
import { useServerRequest } from '../../../../hooks';
import { Post } from './components';
import styled from 'styled-components';

const PostsContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);

	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts').then(({ error, res }) => {
			if (error) {
				return;
			}

			setPosts(res);
		});
	}, [requestServer]);

	return (
		<ul className={className}>
			{posts.map(({ title, imageUrl, id, publishedAt, countComments }) => (
				<Post
					key={id}
					title={title}
					imageUrl={imageUrl}
					publishedAt={publishedAt}
					id={id}
					countComments={countComments}
				/>
			))}
		</ul>
	);
};

export const Posts = styled(PostsContainer)`
	display: grid;
	grid-template-columns: 260px 260px 260px;
	row-gap: 30px;
	justify-content: space-between;
`;
