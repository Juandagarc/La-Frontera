import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeContainer from '../Containers/home-container';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomeContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
