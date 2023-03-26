import {useState} from 'react'
import {Link} from 'react-router-dom'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'
import { Provider } from 'react-redux'

function Navbar() {
const [isVisible, setIsVisible] = useState(false)

const signOutOnClick = () => {
    signOut(auth)
    setTimeout(() => {location.reload() }, 500)
}

const signInOnClick = async () => {
    const response = await signInWithPopup(auth, Providers.google);
    if ( response.user ) {
        location.reload()
    }
}

const dropDown = () => {
    setIsVisible(!isVisible)
    
}

const clicked = () => {
    setIsVisible(false)
}

  return (
    <nav>
        <div className="nav-bar">
            <Link to='/' className='title'>Cars 'R' Us</Link>
            <div className="">
                <button 
                    onClick={dropDown}
                    className={"btn"}>
                    <i className="fa-solid fa-bars"></i>
                    </button>
            </div>
        </div>
       
        {isVisible ? (
            <div className='drop-down'>
                <button className='btn'>
                    <div>
                        <Link to='/'  onClick={clicked} className='btn-text'>
                            Home
                        </Link>
                    </div>
                </button>
                <button className='btn'>
                    <div>
                        <Link to='/dashboard'  onClick={clicked} className='btn-text'>
                            Dashboard
                        </Link>
                    </div>
                </button>
                {
                    !auth.currentUser ? 
                    <button className='btn'>
                        <div>
                            <Link to='/'  onClick={() => {signInOnClick()}} className='btn-text'>
                                Sign In
                            </Link>
                        </div>
                    </button>
                    :
                    <button className='btn'>
                        <div>
                            <Link to='/'  onClick={() => {signOutOnClick()}} className='btn-text'>
                                Sign Out
                            </Link>
                        </div>
                    </button>
                }
            </div>) : (<></>)}
    </nav>
  )
}

export default Navbar