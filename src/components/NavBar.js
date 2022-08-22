import React, { Component } from 'react'
import sony_icon from '../Images/sony_icon.png'
import Signin from '../Images/Signin.png'
import search_icon from '../Images/search_icon.png'
import navList from './NavList'
import { Link } from 'react-router-dom'

const navItems = navList.map(item=>{
    return(
        <div key={item.id}>
        <li className="nav-item">
            <a className="nav-link"><Link to={item.url}>{item.item}</Link></a>
        </li>
    </div>
    )
})

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false,
            user: ""
        }
    }
        clickHandle = () => {
            this.setState({ clicked: !this.state.clicked })
        }
    
        componentDidMount() {
            this.userChange = setInterval(() => this.setUser(), 100)
        }
    
        componentWillUnmount() {
            clearInterval(this.userChange);
        }
    
        setUser = () => {
            this.setState({
                user: localStorage.getItem('UserName')
            });
}
    render() {
        const { user } = this.state;
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
                <div className="container-fluid">
                    <Link to = "/"><img src={sony_icon} width="30" alt="img"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {navItems}
                        </ul> 
                        <div className="m-2">
                            <a href="/#"><img src={search_icon} width="25" alt="img"/></a>
                        </div>
                            <div className="dropdown">
                                <img className="dropimg" src={Signin} alt='use' className='user-pic'></img>
                                <div className="dropdown-content">
                                <hr className="m-0 p-0"></hr>
                                    {user ? <h5 className='dropLink'>{user}</h5> :
                                        <Link to='/signin'>
                                            <h5 className='dropLink'>Sign In</h5>
                                        </Link>}
                                    <hr className="m-0 p-0"></hr>
                                    <a className='dropLink'> <img src='https://origin-staticv2.sonyliv.com/UI_icons/Subscribe_Now.png' className="imgSize" /> Subscribe Now</a>
                                    <hr className="m-0 p-0"></hr>
                                    <a className='dropLink'> <img src="https://origin-staticv2.sonyliv.com/UI_icons/New_Final_Icons_30052020/ActivateTV3x.png" className="imgSize" />Activate TV</a>
                                    <hr className="m-0 p-0"></hr>
                                    <a className='dropLink'> <img src="https://origin-staticv2.sonyliv.com/UI_icons/settings_icon.png" className="imgSize" />Settings & Perferences</a>
                                    <hr className="m-0 p-0"></hr>
                                    <a className='dropLink'> <img src="https://originpreprod-static.sonyliv.com/activate/offer.png" className="imgSize" /> Activate Offer</a>
                                    <hr className="m-0 p-0"></hr>
                                    <Link to="/">
                                        <a className='dropLink' onClick={() => {
                                            window.location.reload(false);
                                            window.localStorage.removeItem('UserName')
                                        }}> <i className="fas fa-signout"></i>Sign Out</a>
                                    </Link>
                                </div>
                            </div>
                    </div>
                </div>
            </nav>
        </div>
    )
    }
}           
export default NavBar
