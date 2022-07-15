
const getPosts = () =>
    fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())

const createPost = (obj) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then(json => console.log(json))
}

export {getPosts, createPost}