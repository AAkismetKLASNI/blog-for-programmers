import { Icon } from '../../../../../../ui-components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostContainer = ({
	className,
	title,
	imageUrl,
	publishedAt,
	id,
	countComments,
}) => {
	return (
		<li className={className}>
			<Link to={`/post/${id}`}>
				<img className="img-post" src={imageUrl} alt="" />
			</Link>
			<div className="container-post">
				<h4 className="title-post">{title}</h4>
				<div className="info-about-post">
					<div>
						<Icon className="fa fa-calendar-o" aria-hidden="true" />
						{publishedAt}
					</div>
					<div>
						<Icon className="fa fa-calendar-o" aria-hidden="true" />
						{countComments}
					</div>
				</div>
			</div>
		</li>
	);
};

export const Post = styled(PostContainer)`
	height: 220px;
	border: 1px solid #000;

	& .img-post {
		width: 100%;
		height: 155px;
	}

	& .container-post {
		padding: 0 10px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	& .title-post {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	& .info-about-post {
		display: flex;
		justify-content: space-between;
	}

	& .info-about-post div {
		display: flex;
		gap: 5px;
		align-items: center;
	}
`;
