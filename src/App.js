import './styles/common.css'
import Preloader from "./components/Preloader/Preloader"
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import {useEffect, useState} from "react";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const handleLoad = () => {
            setIsLoaded(true);
        };
        window.addEventListener("load", handleLoad);
        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    return (
        <>
            {!isLoaded ? <Preloader /> : null

            }
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
