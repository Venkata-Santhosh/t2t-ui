import axios from 'axios';
import { createHashHistory } from 'history'

import {BrowserRouter} from 'react-router-dom';
import cookie from 'react-cookie';
import { API_URL, CLIENT_ROOT_URL, errorHandler } from './index';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FORGOT_PASSWORD_REQUEST, RESET_PASSWORD_REQUEST, PROTECTED_TEST } from './types';


export function loginUser({ username, password }) {
    return function (dispatch) {
        axios.post(`${API_URL}/auth/`, { username, password })
            .then((response) => {
                console.log(response);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', username);
                dispatch({ type: AUTH_USER });
                window.location.href = `${CLIENT_ROOT_URL}/home`;
            })
            .catch((error) => {
                errorHandler(dispatch, error.response, AUTH_ERROR);
            });
    };
}

export function registerUser({ username, password, authorites }) {
    return function (dispatch) {
        axios.post(`${API_URL}/auth/signup`, {username, password,authorites })
            .then((response) => {

                dispatch({ type: AUTH_USER });
                window.location.href = `${CLIENT_ROOT_URL}/signin`;
            })
            .catch((error) => {
                errorHandler(dispatch, error.response, AUTH_ERROR);
            });
    };
}

export function addPost({ title, description, imageURL, category }) {
    return function (dispatch) {
        console.log(imageURL);
        axios.defaults.headers.common['X-Auth-Token'] = localStorage.getItem("token");
        axios.post(`${API_URL}/api/post`, {title, description,imageURL, 'category':{category} },)
            .then((response) => {
                /*localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', response.data.user);
                dispatch({ type: AUTH_USER });*/
                window.location.href = `${CLIENT_ROOT_URL}/post`;
            })
            .catch((error) => {
                errorHandler(dispatch, error.response, AUTH_ERROR);
            });
    };
}

export function logoutUser(error) {
    return function (dispatch) {
        dispatch({ type: UNAUTH_USER, payload: error || '' });
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        window.location.href = `${CLIENT_ROOT_URL}/signin`;
    };
}

export function getForgotPasswordToken({ email }) {
    return function (dispatch) {
        axios.post(`${API_URL}/auth/forgot-password`, { email })
            .then((response) => {
                dispatch({
                    type: FORGOT_PASSWORD_REQUEST,
                    payload: response.data.message,
                });
            })
            .catch((error) => {
                errorHandler(dispatch, error.response, AUTH_ERROR);
            });
    };
}

export function resetPassword(token, { password }) {
    return function (dispatch) {
        axios.post(`${API_URL}/auth/reset-password/${token}`, { password })
            .then((response) => {
                dispatch({
                    type: RESET_PASSWORD_REQUEST,
                    payload: response.data.message,
                });
                // Redirect to login page on successful password reset
                BrowserRouter.push('/login');
            })
            .catch((error) => {
                errorHandler(dispatch, error.response, AUTH_ERROR);
            });
    };
}

export function protectedTest() {
    return function (dispatch) {
        axios.get(`${API_URL}/protected`, {
            headers: { Authorization: cookie.load('token') },
        })
            .then((response) => {
                dispatch({
                    type: PROTECTED_TEST,
                    payload: response.data.content,
                });
            })
            .catch((error) => {
                errorHandler(dispatch, error.response, AUTH_ERROR);
            });
    };
}
