import './header.css'
import './header_responsive.css'
import logo from '../../../images/icons/logo_white.svg'
import burger_icon from '../../../images/icons/burger.svg'
import close_icon from '../../../images/icons/close.svg'
import {Link, animateScroll as scroll} from 'react-scroll'
import Container from "../../container/Container";
import {useState} from "react";

const NavDesktop = () => {
    return(
        <nav className={'nav__desktop'}>
            {/*eslint-disable-next-line*/}
            <a onClick={()=>scroll.scrollToTop()}>
                <img src={logo} alt="logo"/>
            </a>
            <ul>
                <li>
                    {/*eslint-disable-next-line*/}
                    <a onClick={()=>scroll.scrollToTop()}>ГЛАВНАЯ</a>
                </li>
                <li>
                    <Link smooth={true} to='gallery'>ФОТО</Link>
                </li>
                <li>
                    <Link smooth={true} to='about'>О НАС</Link>
                </li>
                <li>
                    <Link className={'button-link'} smooth={true} to='menus'>МЕНЮ</Link>
                </li>
            </ul>
        </nav>
    )
}

const NavMobile = () => {
    const [state, setState]= useState(false)

    return(
        <nav className={'nav__mobile'}>
            {/*eslint-disable-next-line*/}
            <a onClick={()=>scroll.scrollToTop()}>
                <img src={logo} alt="logo"/>
            </a>

            <button onClick={()=>{setState(true)}}>
                <img src={burger_icon} alt="menu"/>
            </button>

            <div
                style={{
                    opacity: state ? 1:0,
                    zIndex: state ? 10:-10
                }}
                className="content"
            >
                <ul>
                    <li>
                        {/*eslint-disable-next-line*/}
                        <a onClick={()=> {
                            setState(false)
                            scroll.scrollToTop()
                        }}>ГЛАВНАЯ</a>
                    </li>
                    <li>
                        <Link
                            smooth={true} to='gallery'
                            onClick={()=>{
                                setState(false)
                            }}
                        >
                            ФОТО
                        </Link>
                    </li>
                    <li>
                        <Link
                            smooth={true}
                            to='about'
                            onClick={()=>{
                                setState(false)
                            }}
                        >
                            О НАС
                        </Link>
                    </li>
                    <li>
                        <Link
                            smooth={true}
                            to='menus'
                            onClick={()=>{
                                setState(false)
                            }}
                        >
                            МЕНЮ
                        </Link>
                    </li>
                    <li>
                        <button onClick={()=>{setState(false)}}>
                            <img src={close_icon} alt="close"/>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

const Header = ({bannerHeight}) => {
    return(
        <header
            style={{
                height: `calc(100vh - ${bannerHeight}px)`
            }}
        >
            <Container>
                <NavDesktop/>
                <NavMobile/>
            </Container>
            
            <Link smooth={true} to='gallery' className={'arrow-down'}>
                <svg width="50" height="28" viewBox="0 0 50 28" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.9608 27.2635C24.1278 27.2653 23.3205 26.9484 22.6791 26.3679L1.28793 6.89742C0.559862 6.23644 0.102004 5.28663 0.0150861 4.25693C-0.0718322 3.22723 0.219308 2.20199 0.824458 1.40675C1.42961 0.611509 2.2992 0.111415 3.24193 0.0164779C4.18466 -0.078459 5.1233 0.239538 5.85137 0.900515L24.9608 18.346L44.0702 1.52357C44.4349 1.20011 44.8545 0.958549 45.3049 0.812787C45.7553 0.667024 46.2277 0.61993 46.6948 0.67421C47.162 0.728491 47.6147 0.883074 48.027 1.12908C48.4392 1.37508 48.8029 1.70766 49.0971 2.10769C49.4236 2.50808 49.6709 2.97781 49.8235 3.48745C49.976 3.99708 50.0306 4.53563 49.9837 5.06937C49.9369 5.60311 49.7896 6.12053 49.5512 6.58921C49.3127 7.05789 48.9882 7.46773 48.598 7.79306L27.2069 26.6015C26.547 27.0903 25.7562 27.3234 24.9608 27.2635Z"/>
                </svg>
            </Link>
        </header>
    )
}


export default Header