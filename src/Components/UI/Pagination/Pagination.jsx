import React from 'react'
import './Pagination.css'
import { usePogination } from '../../../Hooks/usePogination';
const Pagination = ({totalPages, setPage, page}) => {
	let pagesArray = usePogination(totalPages);
	return(
		<div className="pagelist">
			{pagesArray.map(p=>
			<button 
			onClick={()=>setPage(p)}
			 key={p}
			 className={page===p ? 'pagelist__elem select': 'pagelist__elem'}>{p}</button>
			)} 
		</div>
)
}
export default Pagination