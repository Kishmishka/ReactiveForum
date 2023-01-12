import React, { useEffect, useMemo, useState } from 'react'
import { useFetcher, useParams } from 'react-router-dom'
import PostService from '../../API/PostService';
import Loader from '../UI/Loader/Loader';
import { useFetching } from '../../Hooks/useFetching';
import './PostIdPage.css'

const PostIdPage = ({id}) => {
	
	const [post, setPost] = useState({});
	const [coments, setComents] = useState([]);
	const [fetchPostById, isLoading, error] = useFetching(async ()=>{
		const response = await PostService.getById(id)
		setPost(response.data)
	})
	const [fetchComentPost, isLoadingComent, errorComent] = useFetching(async ()=>{
		const responseComent = await PostService.getComent(id)
		setComents(responseComent.data)
	})

	useMemo(()=>{
		fetchPostById();
		fetchComentPost();
		
	},[id])
	
	return(
	<div>
			{isLoading 
			?
			<Loader/> 	
			: 
			<div>
			<div onClick={(e)=>e.stopPropagation()} className="post">
				<div className="post__content content">
					<h1 className='content__title'>{post.title}</h1>
					<p className='content__body'>{post.body}</p>
				</div>
				<div className="post__coments coments">
					{coments.map(coment=>
					<div className="coment">
						<h2 className='coment__email'>{coment.email}</h2>
						<h5 className='coment__name'>{coment.name}</h5>
						<p className='coment__body'>{coment.body}</p>
					</div>)}
				</div>
			</div>
		</div>
			} 
	</div>
		
)
}
export default PostIdPage