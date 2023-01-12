import React, { useContext } from 'react'
import { Route, Routes,Navigate } from 'react-router-dom'
import About from '../Pages/About/About'
import Posts from '../Pages/Posts/Posts'
import Login from '../Pages/Login/Login'
import {AufContext} from '../Context/index'
import Account from '../Pages/Account/Account'

const AppRouter = () => {
	const {isAuf, setIsAuf} = useContext(AufContext)
	return(
		isAuf 
		?
		<Routes>
			<Route path="/" element={<Posts/>}/>
			<Route exact path="posts" element={<Posts/>}/>
			<Route path="about" element={<About/>}/>
			<Route path="account" element={<Account/>}/>
			<Route
       	 	path="*"
        		element={<Navigate to="/" replace />}
    		/>
				
		</Routes>
		:
		<Routes>
			<Route exact path="login" element={<Login/>}/>	
			<Route
				path='*'
				element={<Navigate to ='login' replace/>}
			/>
		</Routes>
)
}
export default AppRouter