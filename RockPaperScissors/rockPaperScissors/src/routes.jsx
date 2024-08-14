import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstChoice from './pages/FirstChoice'
import Scoreboard from './pages/Scoreboard'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FirstChoice />} />
                <Route path="/scoreboard" element={<Scoreboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
