import React, { Component } from 'react';
import axios from 'axios';

import './Blog.css';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';

class Blog extends Component {

  state = {
    posts: [],
    postSelected: null,
    error: false
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const posts = response.data.slice(0,4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Max'
          }
        })
        this.setState({posts: updatedPosts});
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  postSelectedHandler = (id) => {
    this.setState({ postSelected: id });
    console.log(id);
  }

  render () {

    let posts = <p style={{textAlign: 'center'}}>Something is wrong!</p>;

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return <Post
                  key={post.id} 
                  title={post.title}
                  author={post.author}
                  clicked={() => this.postSelectedHandler(post.id)} />
      });
  
    }

    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <section>
          <FullPost id={this.state.postSelected} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    )
  }
}

export default Blog;