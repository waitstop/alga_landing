import './banner.css'
import './banner_responsive.css'
import phone_icon from '../../../images/icons/phone.svg'
import pin_icon from '../../../images/icons/pin.svg'
import yandex_eda_icon from '../../../images/icons/yandex_eda.svg'
import instagram from '../../../images/icons/instagram.svg'
import delivery_club_icon from '../../../images/icons/delivery_club.svg'
import {useEffect, useRef} from "react";


const Banner = ({passData}) => {
    const ref = useRef(null)

    useEffect(()=>{
        passData(ref.current.clientHeight)
    }, [ref.current?.clientHeight, passData])

    return(
        <section ref={ref} className="banner">

            <div className="banner__left">
                <a href='tel:89269663757' className="banner__phone">
                    <img src={phone_icon} alt="phone"/>
                    <span>+7 (926) 966-37-57</span>
                </a>
                <a href='https://yandex.ru/maps/-/CCUV6ZTQwD' target='_blank' rel={'noreferrer'} className="banner__location">
                    <img src={pin_icon} alt="pin"/>
                    <span>дер. Сосенки, д. 56</span>
                </a>
            </div>

            <div className="banner__right">
                <a href="https://www.instagram.com/cafe_alga/" target="_blank" rel="noreferrer">
                    <img src={instagram} alt="instagram" />
                </a>
                <a href="https://eda.yandex.ru/r/alga_vkus_kavkaza?placeSlug=alga_56&shippingType=delivery" target="_blank" rel="noreferrer">
                    <img src={yandex_eda_icon} alt="yandex_eda"/>
                </a>
                <a href="https://market-delivery.yandex.ru/r/alga_vkus_kavkaza?placeSlug=alga_56&shippingType=delivery" target="_blank" rel="noreferrer">
                    <img src={delivery_club_icon} alt="delivery_club"/>
                </a>
            </div>

        </section>
    )
}


export default Banner