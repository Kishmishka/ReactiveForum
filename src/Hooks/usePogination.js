import { useMemo } from "react";

export const usePogination = (totalPages) =>{
	let pagesArray=[];
	const	rezultArray = useMemo(()=>{
		for (let i = 0; i < totalPages; i++) {
			pagesArray.push(i+1);
		}
		return pagesArray	
	},[totalPages])
	return rezultArray	
}