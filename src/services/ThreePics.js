import MockedPosts from './mockedPosts.json';


const getPosts = (filter) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const filteredPosts = MockedPosts.filter((post) => post.text.toLowerCase().includes(filter.toLowerCase()));
            resolve(filteredPosts);
        }, 3000);
    });
}

export default getPosts;