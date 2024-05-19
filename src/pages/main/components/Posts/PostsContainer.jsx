import { useEffect, useState } from 'react';
import { useServerRequest } from '../../../../hooks';
import { Post } from './components';
import { PAGINATION_LIMIT } from '../../../../constants';
import styled from 'styled-components';

const PostsContainer = ({
	className,
	page,
	setLastPage,
	searchBarPhrase,
	switchReadyPhrase,
}) => {
	const [posts, setPosts] = useState([]);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer(
			'fetchPosts',
			page,
			PAGINATION_LIMIT,
			searchBarPhrase.toLowerCase(),
		).then(({ error, res }) => {
			if (error) {
				return;
			}

			setLastPage(res.last);
			setPosts(res.posts);
		});
	}, [requestServer, page, switchReadyPhrase]);

	return (
		<div className={className}>
			{posts.length ? (
				<ul className="test">
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
			) : (
				<div>
					<p className="not-found-posts">Таких постов не существует</p>
				</div>
			)}
		</div>
	);
};

export const Posts = styled(PostsContainer)`
	& .test {
		display: grid;
		grid-template-columns: 260px 260px 260px;
		row-gap: 30px;
		justify-content: space-between;
	}

	& .not-found-posts {
		text-align: center;
	}
`;
