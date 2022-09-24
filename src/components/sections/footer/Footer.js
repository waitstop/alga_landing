import './footer.css';
import './footer_responsive.css'
import logo from '../../../images/icons/logo_white.svg';
import Container from "../../container/Container";
import {animateScroll as scroll, Link} from "react-scroll";

const Footer = () => {
    return(
        <footer>
            <Container>
                <div>
                    <img onClick={()=>scroll.scrollToTop()} src={logo} alt="logo"/>
                </div>
                <ul>
                    <li><span>Пн - Вс 09:00 – 00:00</span></li>
                    <li>
                        <a href="https://yandex.ru/maps/org/alga/199567135135/?display-text=%D0%BA%D0%B0%D1%84%D0%B5%20alga&ll=37.439524%2C55.562416&mode=search&sctx=ZAAAAAgBEAAaKAoSCYnQCDauz0JAEabtX1lp4EtAEhIJ8bkT7L%2FOBkARoYZvYd347D8iBgABAgMEBSgKOABA1QFIAWIkcmVsZXZfYmlnX2F1dG9zY2FsZV9saW1pdF9ydWJyaWM9MTAwYhxyZWxldl9hdXRvc2NhbGVfc3dhcF9lcXVhbD0xYiRyZWxldl9iaWdfYXV0b3NjYWxlX2ZhY3Rvcl9ydWJyaWM9MTZiF3JlbGV2X21pbnJlc19ydWJyaWM9MTAwYiByZWxldl9ydWJyaWNfZXh0cmFfYXV0b3NjYWxpbmc9MWIrcmVhcnI9c2NoZW1lX0xvY2FsL0dlby9FbmFibGVCZWF1dHlGaWx0ZXI9MWoCcnWdAc3MTD2gAQCoAQC9AVlugYHCAQafo4O55wXqAQDyAQD4AQCCAg3QutCw0YTQtSBhbGdhigIAkgIFMjk0MzeaAgxkZXNrdG9wLW1hcHM%3D&sll=37.439524%2C55.562416&sspn=0.178185%2C0.056863&text=%D0%BA%D0%B0%D1%84%D0%B5%20alga&utm_source=share&z=14">
                            дер. Сосенки, д. 56
                        </a>
                    </li>
                    <li>
                        <a href="tel:89269663757">+7 (926) 966 37 57</a>
                    </li>
                    <li>
                        <a href="tel:89037133191">+7 (903) 713 31 91</a>
                    </li>
                </ul>

                <ul>
                    <li>
                        {/*eslint-disable-next-line*/}
                        <a onClick={()=>scroll.scrollToTop()}>Главная</a>
                    </li>
                    <li>
                        <Link smooth={true} to='gallery'>Фото</Link>
                    </li>
                    <li>
                        <Link smooth={true} to='about'>О нас</Link>
                    </li>
                    <li>
                        <Link smooth={true} to='menus'>Меню</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <a href="https://www.instagram.com/cafe_alga/">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.delivery-club.ru/srv/alga_moskva_vd?outOfCoveragePopupOpened=1">Delivery club</a>
                    </li>
                    <li>
                        <a href="https://eda.yandex.ru/moscow/r/alga_vkus_kavkaza">Яндекс.Еда</a>
                    </li>
                </ul>

            </Container>
        </footer>
    )
}


export default Footer