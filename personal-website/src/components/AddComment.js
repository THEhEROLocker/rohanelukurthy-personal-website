import React, { Component } from 'react'
import propTypes from "prop-types";

class AddComment extends Component {
    constructor() {
        super()
        this.state = {
            author: "",
            commentData: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTyping = this.handleTyping.bind(this);
    }

    handleSubmit() {
        this.props.handleCommentSubmit(this.state.author, this.state.commentData);
    }

    handleTyping(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                <span>Author: <input type="text" name="author" onChange={this.handleTyping}></input></span>
                <span>Comment: <input type="text" name="commentData" onChange={this.handleTyping}></input></span>
                <button type="button" onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }

    static propTypes = {
        handleCommentSubmit: propTypes.func
    }
}

export default AddComment