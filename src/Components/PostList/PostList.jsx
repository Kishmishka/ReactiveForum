import { TransitionGroup, CSSTransition } from "react-transition-group"
import tips from '../../Img/gif/tips.gif'
import React, { useState, useRef } from 'react';
import PostItem from "../PostItem/PostItem"
import "./PostList.css"
import PostIdPage from "../PostIdPage/PostIdPage";
import MyButton from "../UI/button/MyButton";
const PostList = ({posts, title, remove}) =>{
	const [showMessage, setShowMessage] = useState(false);
	const [postClikId, setPostClikId] = useState(false);
	const [visible, setVisible] = useState(false);
	const nodeRef = useRef(null);
	 if(!posts.length) 
	 {
	 	return(
			<div className="notFound" >
				<img className="notFound__gif" src={tips}/>
				<h2 className="notFound__text">OOOOOOPS......</h2>
			</div>		
			
	 	)
	 }

	const rootClasses = ["modalPost__bacground"]

	if (visible) {
		rootClasses.push("active")
	}

	return(
		<div  >
			<h2>{title}</h2>
			<div className="postList">
				{posts.map((post, index) =>
					<div key={post.id} className="postList__item">
						<PostItem 
						remove={remove} 
						number={index} 
						post={post} 
						key={post.id} 
						setVisible={setVisible} 
						setShowMessage={setShowMessage} 
						setPostClikId={setPostClikId}
						/>
					</div>
				)}
			</div>
		
          <div className={rootClasses.join(' ')}></div>	 
			<CSSTransition
      	in={showMessage}
      	nodeRef={nodeRef}
			timeout={300}
      	classNames="alert"
      	unmountOnExit
      	>
				<div 
					onClick={()=>{
					setShowMessage(false);
					 setVisible(false)
					}} 
					className="modalPost"
				>
					<div 
					ref={nodeRef}
			 		variant="primary"
          		dismissible
					className="modalPost__content"
					>
						<PostIdPage  id={postClikId}/>
					</div>
				</div>
      </CSSTransition>
		
		
		
			
			
	 		
		</div>			
	)
}

export default PostList