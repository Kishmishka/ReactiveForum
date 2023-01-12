import React from 'react';
import errorImg from '../Img/fuck.jpg';
import './Error.css';
const Erorr = () => {
	return(
		<div className='error'>
			<h1>Ебана в рот, все сломал.</h1>
			<h2>404 НАХУЙ</h2>
			<img src={errorImg}/>
		</div>
)
}
export default Erorr