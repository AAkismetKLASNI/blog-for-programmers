import { useRef } from 'react';
import { Input, Icon, H2 } from '../../../../ui-components';
import { useNavigate } from 'react-router-dom';
import { OperationPost } from '../Operation-post/OperationPostContainer';
import { sanitizeContent } from './utils/sanitizeContent';
import styled from 'styled-components';

const PostEditContainer = ({
	post: { id, title, imageUrl, publishedAt, content },
	className,
}) => {
	const contentRef = useRef(null);
	const imgRef = useRef(null);
	const titleRef = useRef(null);

	const navigate = useNavigate();

	const onSave = () => {
		const newImg = imgRef.current.value;
		const newTitle = titleRef.current.value;
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		console.log(newImg);
		console.log(newTitle);
		console.log(newContent);

		// navigate(`/post/:${id}`);
	};

	return (
		<>
			<div className={className}>
				<H2 margin="10px 0 10px 0">Картинка</H2>
				<Input ref={imgRef} defaultValue={imageUrl} type="text" />
				<div className="info-about-post">
					<H2 margin="10px 0 10px 0">Заголовок</H2>
					<Input ref={titleRef} defaultValue={title} />
					<OperationPost
						publishedAt={publishedAt}
						editingButton={<Icon className="fa fa-floppy-o" onClick={onSave} />}
					/>
					<div
						ref={contentRef}
						contentEditable={true}
						suppressContentEditableWarning={true}
						className="content-post"
					>
						{content}
					</div>
				</div>
			</div>
		</>
	);
};

export const PostEdit = styled(PostEditContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .content-post {
		text-align: justify;
		white-space: pre-line;
	}
`;
