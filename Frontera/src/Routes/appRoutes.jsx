import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeContainer from '../Containers/home/home-container';
import Carta from '../Containers/carta/carta';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomeContainer />} />
                <Route exact path="/Carta" element={<Carta />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
