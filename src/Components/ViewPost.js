import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';
import { Link } from 'react-router-dom';

class ViewPost extends Component {
    state = {
        posts: [],
        selectedPostId : null,
        error : false
    };

    componentDidMount () {

        axios.get('http://192.168.99.100:8080/api/post')
            .then(response => {
                const posts = response.data;
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                    }
                });
                this.setState({posts : updatedPosts});
                console.log(response);

            })
            .catch(error => {
                //update ui or state;
                console.log(error);
                this.setState({error:true});
            });

    }
    postSelectedHandler = (id) => {
        this.setState({selectedPostId:id});
    };
    render() {
        let addPost;
        if(localStorage.getItem("token")) {
            addPost = <li><Link to="/addPost" className="navbar-btn btn btn-danger "><span className="glyphicon glyphicon-log-in"></span>ADD POST </Link></li>
        }
        let posts = <p style ={{textAlign:'center'}}>No posts</p>;

        if(!this.state.error) {
            posts = this.state.posts.map(
                post => {
                    return <Post key={post.id}
                                 title={post.title}
                                 description={post.description}
                                 imageURL={post.imageURL}
                                 clicked = {()=>this.postSelectedHandler(post.id)}
                    />
                }
            );
            console.log(posts);

        }
        return (
            <div>
                {addPost}
                <div className="post-container">{posts}</div>
            </div>
        );
    };
}

export default ViewPost;