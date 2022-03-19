import React from 'react';
import { Routes ,Route } from 'react-router-dom';

import Beranda from './Beranda';
import TentangSaya from './TentangSaya';
import Karya from './Karya';
import Kontak from './Kontak';
import Gallery from '../pages/Gallery';

const Utama = () => (
    <Routes>
        <Route exact path="/" element={<Beranda/>}/>
        <Route path="/tentangsaya" element={<TentangSaya/>}/>
        <Route path="/karya" element={<Karya/>}/>
        <Route path="/kontak" element={<Kontak/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
    </Routes>
)

export default Utama;