

import './post.css';
const { Component } = require("react");
const { default: SinglePost } = require("../SinglePost/single_post");

class Post extends Component {
    state = {
        posts: [
            { title: 'post title 1', description: 'Post description1' },
            { title: 'post title 2', description: 'Post description2' }
        ],
        postTitle: 'Post List',
        showPost: false,
        count: true
    }

    togglePostHandler = () => {
        this.setState({
            showPost: !this.state.showPost
        })
    }

    getPost() {
        if (!this.state.showPost) return null;
        return (<div className='post-content'>
            <SinglePost title={this.state.posts[0].title} description={this.state.posts[0].description} />
            <SinglePost title={this.state.posts[1].title} description={this.state.posts[1].description} />
        </div>)
    }
    render() {
        let post = null;
        if (this.state.showPost) {
            // post = (<div className='post-content'>
            //     <SinglePost title={this.state.posts[0].title} description={this.state.posts[0].description} />
            //     <SinglePost title={this.state.posts[1].title} description={this.state.posts[1].description} />
            // </div>)
        }
        return (

            <div className='post-container'>
                <div>{this.state.count && 'show count'}</div>
                <div className='post-header'>
                    <h2>{this.state.postTitle} </h2>
                </div>
                <div className='update-btn-container'>
                    <button
                        onClick={this.togglePostHandler}
                        className='toggle-btn'>{this.state.showPost ? 'Hide post' : 'Show post'}</button>
                </div>
                <hr />
                {/* {post} */}
                {/* this is one of the method to show element using ternary operators */}
                {/* {this.state.showPost ? (<div className='post-content'>
                    <SinglePost title={this.state.posts[0].title} description={this.state.posts[0].description} />
                    <SinglePost title={this.state.posts[1].title} description={this.state.posts[1].description} />
                </div>) : null} */}
                {/* this is another of the method to show element using ternary operators without else part using && symbol */}
                {/* {this.state.showPost && (<div className='post-content'>
                    <SinglePost title={this.state.posts[0].title} description={this.state.posts[0].description} />
                    <SinglePost title={this.state.posts[1].title} description={this.state.posts[1].description} />
                </div>)} */}
                {/* this is another of the method to show element using function if else operators*/}
                {this.getPost()}
            </div>
        );
    }
}

export default Post