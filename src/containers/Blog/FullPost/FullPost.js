import React, { Component } from 'react';

import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null,
        error: false
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    async loadData() {
        const postId = parseInt(this.props.match.params.id);

        if (postId) {

            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== postId)) {

                const fullPost = await axios.get(`posts/${postId}`);

                this.setState({loadedPost: fullPost.data});
            }
        }
    }

    deletePostHandler = async () => {
        const postId = this.props.match.params.id;

        await axios.delete(`posts/${postId}`).catch(e => {
            this.setState({error: true});
        });
    }


    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

        if (this.props.match.params.id) {
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