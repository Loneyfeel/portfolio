import {useEffect, useState} from "react"

import Preloader from "./components/Preloader/Preloader"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import ScrollButton from "./components/ScrollButton/ScrollButton"

import './styles/common.css'

function App() {
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        const delayMilliseconds = 500;
        const delayTimer = setTimeout(() => {
            setIsLoaded(true);
        }, delayMilliseconds);
        return () => {
            clearTimeout(delayTimer);
        };
    }, []);

    return (
        <>
            {!isLoaded ? <Preloader /> : null}
            <>
                <Header/>
                <Main/>
                <Footer/>
                <ScrollButton/>
            </>
        </>
    )
}

export default App;
