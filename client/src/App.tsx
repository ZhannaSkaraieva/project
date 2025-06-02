import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import { Route, NavLink, Routes } from 'react-router-dom';
import { Quests } from './pages/Quests';
import { Contacts } from './pages/Contacts';
import { AuthPage }  from './pages/AuthPage';




function App() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" >Головна</NavLink>
                    </li>
                    <li>
                        <NavLink to="/quests" style={({ isActive }) => ({
                        color: isActive ? "brown" : "black",})}>Квести</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Контакт</NavLink>
                    </li>
                </ul>
            </nav>
         <Routes>
                <Route path="/" element={<AuthPage />} /> {/*"/" на каком url будет отображаться компонент Home*/}
                {/*element - это параметр (пропс), который принимает компонент, который будет отображаться на экране*/}
                <Route path="/quests/:id" element={<Quests />} />
                <Route path="/contact" element={<Contacts />} />
                <Route path="*" element={<h1>404 - Сторінка не знайдена</h1>} />
        </Routes>
        </div>
    );
}

export default App;
