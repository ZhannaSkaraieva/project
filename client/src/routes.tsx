
import React, { Component } from "react";
import { Route, NavLink, Routes } from 'react-router-dom';
import { Quests } from './pages/Quests';
import { Contacts } from './pages/Contacts';
import  AuthPage   from './pages/AuthPage';
import { ADMIN_ROUT, ALLQUEST_ROUT, LOGIN_ROUT, ORDERS_ROUT, QUESTS_ROUT, REGISTRATION_ROUT } from "./utils";
import Admin from "./pages/Admin";
import Orders from "./pages/Orders";
import Allquests from "./pages/Allquests";




export const authRoutes = [
    { path: ADMIN_ROUT,element: <Admin/>,},
    { path: ORDERS_ROUT,element: <Orders/>,}
]

export const publicRoutes = [
    { path: ALLQUEST_ROUT,element: <Allquests/>,},
    { path: LOGIN_ROUT,element: <AuthPage/>,},
    { path: REGISTRATION_ROUT,element: <AuthPage/>,},
    { path: QUESTS_ROUT + '/:id',element: <Quests/>,}
]

export function Rout(): React.ReactElement {
    const isAuth = false;
        return (
            <Routes>
                {isAuth && authRoutes.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
                {!isAuth && publicRoutes.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
                {/* Общие маршруты */}
                <Route path="/contact" element={<Contacts />} />
                <Route path="/forbeginers" element={<Allquests />} />
                <Route path="/reviews" element={<Allquests />} />
                <Route path="/promotions" element={<Allquests />} />
                <Route path="*" element={<h1>404 - Сторінка не знайдена</h1>} />
            </Routes>
        )
}


{/* {<nav>
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
            </nav>} */}