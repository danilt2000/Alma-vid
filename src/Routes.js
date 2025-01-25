// Примерная структура
import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home/Home.jsx';
import { About } from './pages/About/About.jsx';
import { Objects } from './pages/Objects/Objects.jsx';
import { Apartament } from './pages/Apartament/Apartament.jsx';
import { Services } from './pages/Services/Services.jsx';
import { Office } from './pages/Office/Office.jsx';

const Routing = () => (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/objects" element={<Objects />} />
        <Route path="/apartament" element={<Apartament />} />
        <Route path="/services" element={<Services />} />
        <Route path="/office" element={<Office />} />
    </Routes>
);

export { Routing };
