import React from "react";
import "./style.css";

class DataFetch extends React.Component{
    state = {
        posts: [],
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(postsList => {
            this.setState({ posts: postsList });
        });
    }

    render() {
        return (
            <ul>
                {this.state.posts.map((post) => (
                    <li key={post.id}>
                        <p>user id:{post.id}</p>
                        <p>title: {post.title}</p>
                        <p>body: {post.body}</p>
                        </li>
                ))}
            </ul>
        )
    }
}

export default DataFetch;