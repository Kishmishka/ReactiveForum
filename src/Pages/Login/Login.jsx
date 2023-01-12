import React, { useContext } from 'react'
import MyInput from '../../Components/UI/input/MyInput'
import MyButton from '../../Components/UI/button/MyButton'
import {AufContext} from '../../Context/index'
import './Login.css'

const Login = () => {
	const {setIsAuf, setLogin, setPassword, login} = useContext(AufContext);
	
	function logIn(event){
		event.preventDefault();
		setIsAuf(true);
		localStorage.setItem('auf', 'true');
		localStorage.setItem('login', login);
		console.log(event.target);

	}

	return(
		<div className='Auth'>
			<h2 className='Auth__title'>Welcome</h2>
			<form onSubmit={logIn}
			className='Auth__form form'>
			<div className="form__item">
				<MyInput onChange={(e)=> setLogin(e.target.value)} type="text" placeholder="Login"></MyInput>
			</div>
			<div className="form__item">
				<MyInput type="password" placeholder="Password"></MyInput>
			</div>
			<div className="form__btn">
				<MyButton >Login</MyButton>
			</div>
			<div className="form__btn">
				<MyButton>Regestration</MyButton>
			</div>
			
			</form>
		</div>
)
}
export default Login