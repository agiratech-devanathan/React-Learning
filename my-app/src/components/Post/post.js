

import './post.css';
const { Component } = require("react");
const { default: SinglePost } = require("../SinglePost/single_post");

class Post extends Component {
    state = {
        posts: [
            { title: 'post title 1', description: 'Post description1' },
            { title: 'post title 2', description: 'Post description2' }
        ],
        postTitle: 'Post List'
    }

    updateTitleHandler() {
        console.log('update title')
        console.log(this)
        this.setState({
            postTitle:'modified title'
        })
        
    }
    render() {
        setTimeout(() => {
            const ModifiedPosts = [...this.state.posts];
            ModifiedPosts[0].title = 'Modifief posts Data 1';
            ModifiedPosts[1].title = 'Modifief posts Data 2';

            this.setState({
                ModifiedPosts,
            })
            this.setState({
                postTitle: 'Modified Post title',
            })
        }, 3000)
        return (

            <div className='post-container'>
                <div className='post-header'>
                    <h2>{this.state.postTitle} </h2>
                </div>
                <div className='update-btn-container'>
                    <button onClick={this.updateTitleHandler.bind(this)} className='update-btn'>update Post title</button>
                </div>
                <hr />
                <div className='post-content'>
                    <SinglePost title={this.state.posts[0].title} description={this.state.posts[0].description} />
                    <SinglePost title={this.state.posts[1].title} description={this.state.posts[1].description} />
                </div>

            </div>
        );
    }
}

export default Post