import './single_post.css'
const { Component } = require("react");

class SinglePost extends Component {
    render() {
        return (
            <div className='post-data'>
                 <div className='post-id'>
                    {this.props.id}
                </div>
                <div className='post-title'>
                 <h2>{this.props.title}</h2>   
                </div>
                <div className='post-description'>
                    {this.props.description}
                </div>
               
            </div>

        );
    }
}

export default SinglePost