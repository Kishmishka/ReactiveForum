import React from 'react';
import { useState } from "react";
import MyButton from "../UI/button/MyButton";
import './PostForm.css';
import MyInput from "../UI/input/MyInput";
const PostForm = ({creatPost}) => {
	const [post, setPost] = useState({title:'', body:''});

	function addNewPost(e){
		e.preventDefault()
		creatPost({...post, id: 0})
		// setPost({title:'', description:''})
	}
  return(
	 <div className="funcBar">
		<form className="postForm">
			<div className="postForm_inputs inputs">
			
				<MyInput
					className="inputs__item" 
					value={post.title}
					onChange = {e=>setPost({...post, title:e.target.value})}
					
					type="text" 
					placeholder="Название поста"/>
				<MyInput
					className="inputs__item" 
					value={post.body}
					onChange = {e => setPost({...post, body:e.target.value})}
					type="text" 
					placeholder="Описание поста"/>
					
			</div>
			<MyButton onClick={addNewPost} >Создать пост</MyButton>
		</form>
	 </div>
)
}
export default PostForm