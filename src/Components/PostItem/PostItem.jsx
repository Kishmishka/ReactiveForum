import React, { useState } from "react";
import './PostItem.css'
import {useNavigate} from 'react-router-dom'
import { HandySvg } from "handy-svg";
import heartSvg from '../../Img/icons/heart.svg'
import commentSvg from '../../Img/icons/comment.svg'
import eyeSvg from '../../Img/icons/eye.svg'
const PostItem = (props) =>{
	const [likes, setlikes] = useState(0);
	const [comments, setComments] = useState(0);
	const [views, setViews] = useState(0);
	function selectRemovePost(){
		props.remove(props.post)
	}
	const navigate = useNavigate() 
	
	return(
		<div 
		onClick ={()=>{
			props.setPostClikId(props.post.id);
			
		}}
		className="Post">
				<div
					onClick={()=>{
						props.setVisible(true);
						props.setShowMessage(true);
						setViews(views+1);
					}}
				 className="Post__content">
					<strong >{props.post.id}. {props.post.title}</strong>
					<div className="Post__body">
						{props.post.body}
					</div>
				</div>
				<div className="Post__reaction reaction">
					<div className="reaction__comment comment">
						<HandySvg
							className="eye__icon"
							src={eyeSvg}
							width='25px'
							height='25px'
						/>
						<div className="comment__count">{views}</div>
					</div>
					<div className="reaction__comment comment">
						<HandySvg
							className="comment__icon"
							onClick={()=>{setComments(comments+1)}}
							src={commentSvg}
							width='25px'
							height='25px'
						/>
						<div className="comment__count">{comments}</div>
					</div>
					<div className="reaction__likes likes">
						<HandySvg
							onClick={()=>setlikes(likes+1)}
							className="likes__icon"
							src={heartSvg}
							width='25px'
							height='25px'
						/>
						<div className="likes__count">{likes}</div>
					</div>
				</div>
		</div>
	)
}
export default PostItem;
