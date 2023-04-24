import axios from 'axios';
import MockedPosts from './mockedPosts.json';

const API_ENDPOINT = 'https://three-points.herokuapp.com/api';

export function LogUser(user, psw) {

    return axios.post(`${API_ENDPOINT}/login`,
        {
            username: user,
            password: psw
        });
}

export function GetCurrentToken() {
    return localStorage.getItem('token')
};

export function StoreToken(token) {
    localStorage.setItem('token', token);
}

export function GetProfile() {

    return axios.get(`${API_ENDPOINT}/users/me`,
        {
            headers: {
                'Authorization': `Bearer ${GetCurrentToken()}`,
                'content-type': 'text/json'
            }
        }
    );
}

export function CreatePost(image, text) {

    return axios.post(`${API_ENDPOINT}/posts`,
        {
            image: image,
            text: text
        },
        {
            headers: {
                'Authorization': `Bearer ${GetCurrentToken()}`,
                'content-type': 'text/json'
            }
        }
    );
}

export function GetMockedPosts(filter) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const filteredPosts = MockedPosts.filter((post) => post.text.toLowerCase().includes(filter.toLowerCase()));
            resolve(filteredPosts);
        }, 3000);
    });
}

export async function GetPosts(searchBy) {

    let filteredPosts = [];

    await axios.get(`${API_ENDPOINT}/posts`,
        {
            headers: {
                'Authorization': `Bearer ${GetCurrentToken()}`,
                'content-type': 'text/json'
            }
        }
    ).then((response) => {
        filteredPosts = response.data;
    }).catch((error) => {
        throw error;
    });

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(filteredPosts.filter((post) => post.text.toLowerCase().includes(searchBy.toLowerCase())));
        }, 3000);
    });
}

export function DeletePost(postId) {

    return axios.delete(`${API_ENDPOINT}/posts/${postId}`,
        {
            headers: {
                'Authorization': `Bearer ${GetCurrentToken()}`,
                'content-type': 'text/json'
            }
        }
    );
}

export function LikePost(postId) {

    return axios.post(`${API_ENDPOINT}/posts/${postId}/like`,
        {},
        {
            headers: {
                'Authorization': `Bearer ${GetCurrentToken()}`
            }
        }
    );
}

export function CommentPost(postId, comment) {

    return axios.post(`${API_ENDPOINT}/posts/${postId}/comments`,
        {
            text: comment
        },
        {
            headers: {
                'Authorization': `Bearer ${GetCurrentToken()}`,
                'content-type': 'text/json'
            }
        }
    );
}

export function DeleteComment(postId, commentId) {

    return axios.delete(`${API_ENDPOINT}/posts/${postId}/comments/${commentId}`,
        {
            headers: {
                'Authorization': `Bearer ${GetCurrentToken()}`,
                'content-type': 'text/json'
            }
        }
    );
}

export default [GetPosts, LogUser, GetCurrentToken, StoreToken, GetProfile, CreatePost, GetPosts, DeletePost, LikePost, CommentPost, DeleteComment];