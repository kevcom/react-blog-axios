import React, { Component } from 'react';

import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null,
        error: false
    }


    async componentDidUpdate() {
        if (this.props.id) {

            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {

                const fullPost = await axios.get(`https://jsonplaceholder.typicode.com/postss/${this.props.id}`);

                this.setState({loadedPost: fullPost.data});
            }
        }
    }

    deletePostHandler = async () => {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`).catch(e => {
            this.setState({error: true});
        });
    }


    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading</p>;
        }

        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
            );
        }

        
        return post;
    }
}

export default FullPost;