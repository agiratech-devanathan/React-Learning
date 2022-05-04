

import './post.css';
const { Component } = require("react");
const { default: SinglePost } = require("../SinglePost/single_post");

class Post extends Component {
    state = {
        posts: [
            { id: '1', title: 'post title 1', description: 'Post description1' },
            { id: '2', title: 'post title 2', description: 'Post description2' },
            { id: '3', title: 'post title 3', description: 'Post description3' }
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
        // outputing the list of data using map function
        // let post=this.state.posts.map((post)=>(
        //     <SinglePost id={post.id} title={post.title} description={post.description} />
        // ));
        // outputing the list of data using for loop
        let post = [];
        for (let loopPost of this.state.posts) {
            post.push(
                <SinglePost
                    id={loopPost.id}
                    title={loopPost.title}
                    description={loopPost.description}
                />
            )
        }

        return (
        <div className='post-content'>
            {
            this.state.posts.map((post,index)=>{
                return (
                    <SinglePost
                    key={index}
                    
                    title={post.title}
                    description={post.description}
                />
                );
            })
            }
           
        </div>
        );
    }
    render() {
        let post = null;

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
                {this.getPost()}
            </div>
        );
    }
}

export default Post