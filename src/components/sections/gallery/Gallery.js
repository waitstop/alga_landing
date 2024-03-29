import './gallery.css'
import './gallery_responvise.css'
import Container from "../../container/Container";
import {useState} from "react";
import {Button as ScrollButton} from 'react-scroll';
import useWindowDimensions from "../../../hooks/useWindowDimensions";

function importAll(r) {
    let images = [];
    // eslint-disable-next-line
    r.keys().map((item) => { images.push(r(item)) });
    return images;
}

const images = importAll(require.context('../../../images/gallery', false, /\.(png|jpe?g|svg)$/));
const imagesF = importAll(require.context('../../../images/gallery/first_to_show', false, /\.(png|jpe?g|svg)$/));
images.sort(() => Math.random() - 0.5);
images.unshift([...imagesF])

const Gallery = () => {
    console.log(images)
    const { width } = useWindowDimensions()

    let initialToShow = 6
    if(width <= 780) initialToShow = 4
    if(width <= 450) initialToShow = 2
    const [imagesToShow, setImagesToShow] = useState(initialToShow)

    return(
        <section name='gallery' className="gallery">
            <Container>
                <h1>Галерея</h1>
                <h3>Изучите блюда и банкетный зал</h3>
                <div className="image-container">
                    {images.map((image, index)=>{
                        if(index >= imagesToShow) return false
                        return (
                            <div key={index} className="image-holder" style={{backgroundImage: `url(${image})`}}/>
                        )
                    })}
                </div>
                {imagesToShow <= images.length &&
                    <ScrollButton
                        to='gallery-end'
                        onClick={()=>{
                            setImagesToShow(prevState => (prevState + initialToShow ))
                        }}
                        type='submit'
                        smooth={true}
                        value={'ЗАГРУЗИТЬ ЕЩЕ'}
                    />
                }
                <div name='gallery-end'/>
            </Container>
        </section>
    )
}

export default Gallery