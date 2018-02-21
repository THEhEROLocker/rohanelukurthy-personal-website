import React, { Component } from 'react'
import Comment from './Comment'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class CommentsList extends Component{
    render(){
        return (
            <div style={{'margin-left': '25%'}}>
                <MuiThemeProvider>
                { this.props.CommentsListReducer.map((obj,index) => {
                    return <Comment key={index} author={obj.author} commentData={obj.commentData} />
                }) }
                </MuiThemeProvider>
            </div>
        )
    }
}

export default CommentsList