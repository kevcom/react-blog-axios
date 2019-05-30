import React, { Component } from 'react';

import axios from 'axios';

import Post from '../../../components/Post/Post';
import classes from './Posts.module.css';

class Posts extends Component {

    state = {
        posts: []
    }

    async componentDidMount() {
        console.log(this.props);
        
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts').catch(error => {
        	console.log(error);
        });

        const postsSubset = posts.data.slice(0,4);

        const updatedPosts = postsSubset.map(post => {
            return {
                ...post,
                author: 'Kevin'
            }
        });

        this.setState({posts: updatedPosts });
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id })
    }

	render() {
        const posts = this.state.posts.map(post => {
	        return <Post
	            clicked={() => this.postSelectedHandler(post.id)}
	            key={post.id}
	            title={post.title}
	            author={post.author}
	        />
        });

		return (
			<section className={classes.Posts}>
                {posts}
            </section>
		);
	}
}

export default Posts;           