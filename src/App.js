import { BrowserRouter} from 'react-router-dom';
import Navbar from './Components/UI/navbar/Navbar';
import './App.css'
import AppRouter from './Components/AppRouter';
import {AufContext} from './Context/index'
import { useEffect, useState } from 'react';

function App() {
	const [isAuf, setIsAuf] = useState(false);
	const [login, setLogin] = useState(false);

	useEffect(()=>{
		if(localStorage.getItem('auf')){
			setIsAuf(true);
		}
	},[])

	return(
		
			
		<AufContext.Provider value={{
			login: login,
			isAuf: isAuf,
			setIsAuf: setIsAuf,
			setLogin: setLogin,
		
		}}>
			<BrowserRouter>
				<Navbar/>
				<AppRouter/>
			</BrowserRouter>
		</AufContext.Provider>
	)
}

export default App;
