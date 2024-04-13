import { H2, Icon } from '../../../../ui-components';
import styled from 'styled-components';

const PostContentContainer = ({
	id,
	title,
	imageUrl,
	publishedAt,
	content,
	className,
}) => {
	return (
		<>
			<div className={className}>
				<img src={imageUrl} alt="" id={id} />
				<div className="info-about-post">
					<H2 textAlign="left">{title}</H2>
					<div className="opetaion-post">
						<div>
							<Icon className="fa fa-calendar-o" aria-hidden="true" />
							<span>{publishedAt}</span>
						</div>
						<div>
							<Icon className="fa fa-pencil-square-o" aria-hidden="true" />
							<Icon className="fa fa-trash-o" aria-hidden="true" />
						</div>
					</div>
					<p className="content-post">{content}</p>
				</div>
			</div>
		</>
	);
};

export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .opetaion-post {
		display: flex;
		justify-content: space-between;
		margin: 20px 0;
	}

	& .opetaion-post * {
		display: flex;
		gap: 10px;
		align-items: center;
	}

	& .content-post {
		text-align: justify;
	}
`;
