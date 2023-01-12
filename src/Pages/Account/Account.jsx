import React, { useContext } from 'react'
import MyButton from '../../Components/UI/button/MyButton'
import { AufContext } from '../../Context'
import duck from '../../Img/gif/DUCK.gif'
import './Account.css'
const Account = () => {
	const {isAuf, setIsAuf, login} = useContext(AufContext)

	function logOut(){
		setIsAuf(false);
		localStorage.removeItem('auf')
		localStorage.removeItem('login')
	}

	return(
		
		<div className='Account'>
			<div className="Account__content content">
				<img src={duck} alt="LOADING" className="content__avatar" />
				<div className="content__info info">
					<div className="info__person">
						<h4 className="content__login person-elem">Nick: {localStorage.getItem('login')}</h4>
						<h4 className="content__name person-elem">Name: Grigori</h4>
						<h4 className="content__surname person-elem">Surname: Alibaba Chetverti</h4>
						<h4 className="content__email person-elem">E-mail: Grgori.alpha.super_men@auf.gg</h4>
					</div>
					<div className="info__achiv achiv">
						<div className="achiv__postCount achiv__elem">Count posts: 12</div>
						<div className="achiv__friends achiv__elem">Friends: 322</div>
						<div className="achiv__rang achiv__elem">Rang: Bomg</div>
						<div className="achiv__likes achiv__elem">Likes: 322</div>
						<div className="btn__exit">
							<MyButton onClick={logOut}>Exit</MyButton>
						</div>
					</div>
					
					
				</div>
				
				

			</div>
		</div>
)
}
export default Account