import React, { Component } from 'react'
import Comment from './Comment'

class CommentsList extends Component{
    render(){
        return (
            <div>
                { this.props.CommentsListReducer.map((obj,index) => {
                    return <Comment key={index} author={obj.author} commentData={obj.commentData} />
                }) }
            </div>
        )
    }
}

export default CommentsList