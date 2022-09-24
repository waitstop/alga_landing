import './location.css'
import './location_responsive.css'


const Location = () => {
    return(
        <section name={'about'} className="about">
            <iframe
                title={'map'}
                className={'about__map'}
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae0b6658c682c15ca180b60e4bffe44cad392f7db2d531137cb6383adc927cc55&amp;source=constructor"
                frameBorder={0}
            />
            <div className="about__right">
                <div>
                    <h3>Телефон для заказа</h3>
                    <a href={'tel:89269663757'}>
                        <p>+7 (926) 966 37 57</p>
                    </a>
                    <a href={'tel:89037133191'}>
                        <p>+7 (903) 713 31 91</p>
                    </a>
                </div>

                <div>
                    <h3>Адрес</h3>
                    <a
                        href={'https://yandex.ru/maps/213/moscow/?from=mapframe&ll=37.454987%2C55.564196&mode=usermaps&source=mapframe&um=constructor%3Ae0b6658c682c15ca180b60e4bffe44cad392f7db2d531137cb6383adc927cc55&utm_source=mapframe&z=13'}
                        target={'_blank'}
                        rel={'noreferrer'}
                    >
                        дер. Сосенки, д. 56
                    </a>
                </div>

                <div>
                    <h3>Социальные сети</h3>
                    <a href="https://www.instagram.com/cafe_alga/">
                        <p>Instagram — @cafe_alga</p>
                    </a>
                </div>

                <div>
                    <h3>Заказать онлайн</h3>
                    <a
                        href="https://www.delivery-club.ru/srv/alga_moskva_vd?vendorBlockedPopupOpened=1"
                        target={'_blank'}
                        rel={'noreferrer'}
                    >
                        <p>Delivery club</p>
                    </a>
                    <a
                        href="https://eda.yandex.ru/moscow/r/alga_vkus_kavkaza?shippingType=delivery"
                        target={'_blank'}
                        rel={'noreferrer'}
                    >
                        <p>Яндекс.Еда</p>
                    </a>
                </div>

                <div>
                    <h3>График</h3>
                    <p>Пн - Вс 09:00 – 00:00</p>
                </div>

            </div>
        </section>
    )
}

export default Location