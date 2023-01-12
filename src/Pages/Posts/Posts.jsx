import { useEffect, useState } from "react";
import { useFetching } from "../../Hooks/useFetching";
import { getPageCount } from "../../Utils/pages";
import MyButton from "../../Components/UI/button/MyButton";
import PostService from "../../API/PostService";
import {usePosts} from "../../Hooks/usePost";
import MyModal from "../../Components/UI/Modal/MyModal";
import PostForm from "../../Components/PostForm/PostForm";
import PostFilter from "../../Components/PostFilter";
import Loader from "../../Components/UI/Loader/Loader";
import PostList from "../../Components/PostList/PostList";
import Pagination from "../../Components/UI/Pagination/Pagination"
import './Posts.css'
import Footer from "../../Components/UI/Footer/Footer";
function Posts() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({sort:'', query:''})
	const [modal, setModal] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const[limit, setLimit] = useState(12);
	const[page, setPage] = useState(1);
	const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page);
		setPosts(response.data) ;
		const totalCounts = response.headers['x-total-count']
		setTotalPages(getPageCount(totalCounts, limit))
	})
	const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
	
	useEffect(() =>{
		
		fetchPosts()	
		
	},[page])
	
	function creatPost(newPost){
		setPosts([newPost,...posts])
		setModal(false)
	}


	function removePost(post){
		setPosts(posts.filter(p => p.id !== post.id))
	}

	
  return (
    <div className="App">
	 	<div className="container">
		 <MyModal visible={modal} setVisible={setModal}>
			<PostForm 
			creatPost={creatPost}
			/>
		</MyModal>
	
		 
		
		<div className="menu">
			
			<MyButton onClick = {()=>setModal(true)}>Создать пост</MyButton>
		
			<PostFilter 
			filter={filter} 
			setFilter={setFilter}
			/>
		</div>
		
		<hr style={{margin:"15px 0"}}/>
		{postError && <h2 style={{textAlign:'center'}}>Пизда: {postError}</h2>}
	 	{isPostLoading ? 
		<Loader />
		: 
		<PostList 
		remove={removePost} 
		posts={sortedAndSearchPosts} 
		title=""
		/>
		
		}
		<Pagination 
			setPage={setPage} 
			page={page} 
			totalPages={totalPages}
		/>
		<hr style={{margin:"15px 0"}}/>
		</div>
    </div>
  );
}

export default Posts;