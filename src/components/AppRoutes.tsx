import React, { useContext } from 'react';
import { Route, Routes } from 'react-router';
import Home from "../pages/Home"
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import { AuthContext } from "../context/auth"
import SinglePost from '../pages/SinglePost';
import ForgotPassword from '../pages/ForgotPassword';
import ChangePassword from '../pages/ChangePassword';


export enum AllRoutes {
    home = "/*",
    profile = "/profile",
    login = "/login",
    register = "/register",
    post = "/post",
    forgot = "/forgot",
    changePassword = "/password"
}


const AppRoutes = () => {
    const { user } = useContext(AuthContext)

    const publicRoutes = [
        { path: AllRoutes.home, elem: <Home /> },
        { path: AllRoutes.profile + "/:id", elem: <Profile /> },
        { path: AllRoutes.login, elem: <Login /> },
        { path: AllRoutes.register, elem: <Register /> },
        { path: AllRoutes.post + '/:id', elem: <SinglePost /> },
        { path: AllRoutes.forgot, elem: <ForgotPassword /> },
        { path: AllRoutes.changePassword + "/:secretLink", elem: <ChangePassword /> }
    ]

    const authRoutes = [
        { path: AllRoutes.home, elem: <Home /> },
        { path: AllRoutes.profile + "/:id", elem: <Profile /> },
        { path: AllRoutes.post + '/:id', elem: <SinglePost /> }
    ]

    return (
        <Routes>
            {user
                ? authRoutes.map(r => <Route key={r.path} path={r.path} element={r.elem} />)
                : publicRoutes.map(r => <Route key={r.path} path={r.path} element={r.elem} />)
            }
        </Routes>
    );
};

export default AppRoutes;