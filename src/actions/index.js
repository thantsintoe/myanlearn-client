import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_TWEETS } from './types';

const ROOT_URL = 'https://myanlearn.herokuapp.com';

const createAuthenticatedSession = (response) => {
    localStorage.setItem('token', response.data.token)
    browserHistory.push('/feature')
}


export function signinUser({username, password}) {

    return function(dispatch) {
         // submit username + pswd to server
        axios.post(`${ROOT_URL}/signin`, { username, password})
            .then(response => {
                // request is ok, update authenticated state and redirect to page
                dispatch({type : AUTH_USER})
                createAuthenticatedSession(response);
            })
            .catch((error) => {
                dispatch(authError('Username or Password is incorrect...'));
            })
    }
}

export function signupUser({username, password}) {

    return function(dispatch) {
        axios.post(`${ROOT_URL}/signup`, {username, password})
            .then((response) => {
                dispatch({type : AUTH_USER})
                createAuthenticatedSession(response);
            })
            .catch((error) => {
                dispatch(authError(error.response.data.error));
            })
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser() {
    localStorage.removeItem('token');
    return { type : UNAUTH_USER }
}

export function fetchTwitterPosts() {
    return function(dispatch) {
        axios.get(ROOT_URL, {
            headers: {
                authorization : localStorage.getItem('token')
            }
        })
        .then((response => {
            dispatch({
                type : FETCH_TWEETS,
                payload: response.data.twitterData.statuses
            })
        }))
        .catch((error) => {
            console.warn("Cannot fetch twitter posts...")
        })
    }
}

