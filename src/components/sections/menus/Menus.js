import './menus.css'
import './menus_responsive.css'
import cat_main from '../../../images/menus/main.jpg'
import cat_combo from '../../../images/menus/combo.jpg'
import cat_others from '../../../images/menus/others.jpg'

import Container from "../../container/Container";



const Menus = () => {
    return(
        <section className="menus">
            <Container>
                <h1>Меню</h1>
                <h3>Наши блюда, напитки и соусы</h3>
                <div className="cats">
                    <a href="./pdf/main.pdf" target={'_blank'} rel={'noreferrer'} className="cats-item">
                        <div className={'cats-img'} style={{backgroundImage: `url(${cat_main})`}}/>
                        <h4>Основное меню</h4>
                    </a>
                    <a href="./pdf/combo.pdf" target={'_blank'} rel={'noreferrer'} className="cats-item">
                        <div className={'cats-img'} style={{backgroundImage: `url(${cat_combo})`}}/>
                        <h4>Шашлычное комбо</h4>
                    </a>
                    <a href="./pdf/others.pdf" target={'_blank'} rel={'noreferrer'} className="cats-item">
                        <div className={'cats-img'} style={{backgroundImage: `url(${cat_others})`}}/>
                        <h4>Напитки, соусы и закуски</h4>
                    </a>
                </div>
            </Container>
        </section>
    )
}


export default Menus