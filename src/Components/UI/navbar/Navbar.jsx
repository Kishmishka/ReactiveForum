import React from 'react'
import {HandySvg} from 'handy-svg';
import "./Navbar.css"
import { Link } from 'react-router-dom'
import logo from '../../../Img/diatribeNow.png'
import iconSrc from '../../../Img/icons/avatar.svg'




const Navbar = () => {
	return(
		<div className='navBar'>
			<div className="container">
				<div className="navBar__content">
					<img className='navbar__logo' src={logo}/>
					<div className="navBar__links links">
						<Link to="/about" className="links__item">wussup</Link>
						<Link to="/posts" className="links__item">Posts</Link>
						<Link to="/account" className="links__item">
						<HandySvg
							
        					src={iconSrc}
        					className="icon"
        					width="32"
        					height="32"
    					/>
						</Link>
						
					</div>
				</div>
			</div>
		</div>
)
}
export default Navbar