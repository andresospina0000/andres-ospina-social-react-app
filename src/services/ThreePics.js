import MockedPosts from './mockedPosts.json';


const getPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MockedPosts);
        }, 3000);
    });
}

export default getPosts;