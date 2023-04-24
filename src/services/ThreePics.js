import axios from 'axios';
import MockedPosts from './mockedPosts.json';

const API_ENDPOINT = 'https://three-points.herokuapp.com'

export function getPosts(filter) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const filteredPosts = MockedPosts.filter((post) => post.text.toLowerCase().includes(filter.toLowerCase()));
            resolve(filteredPosts);
        }, 3000);
    });
}

export function logUser(user, psw) {

    return axios.post(`${API_ENDPOINT}/api/login`, {
        username: user,
        password: psw
    })

}

export function getCurrentToken() {
    return localStorage.getItem('token')
};

export function setToken(token) {
    localStorage.setItem('token', token);
}

export default [getPosts, logUser, getCurrentToken, setToken];