import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils'
import {ReactComponent as Logo} from '../../asset/crown.svg';

const Header = ({currentUser}) => (
    <div className="header">
        <Link classname='logo-container' to='/'>
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            <Link>
            {
                currentUser ?
                <div className='option' onClick={()=> auth.signOut()}>Sign out</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            </Link>
        </div>
        
    </div>
)

export default Header;