import Banner from "./components/sections/banner/Banner";
import './fonts/comfortaa/comfortaa.css'
import Header from "./components/sections/header/Header";
import {useState} from "react";
import Gallery from "./components/sections/gallery/Gallery";
import Location from "./components/sections/location/Location";
import Menus from "./components/sections/menus/Menus";
import Footer from "./components/sections/footer/Footer";


function App() {
    const [bannerHeight, setBannerHeight] = useState(0)

    const passData = (data) => {
        setBannerHeight(data)
    }

    return (
        <div className="App">
            <Banner passData={passData}/>
            <Header bannerHeight={bannerHeight}/>
            <Gallery/>
            <Location/>
            <Menus/>
            <Footer/>
        </div>
    )
}

export default App
