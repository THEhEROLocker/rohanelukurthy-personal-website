import React, { Component } from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card';

const cardStyle = {
    'width': '60%',
    'height': '170px',
    'border': '4px solid black'
}

const cardHeaderStyle = {
    'border-bottom': '1mm solid black'
}

class Comment extends Component {
    render() {
        return (
            <div style={{'padding-bottom': '10px'}}>
                <Card style={cardStyle}>
                    <CardHeader style={cardHeaderStyle}>{this.props.author}</CardHeader>
                    <CardText>{this.props.commentData}</CardText>
                </Card>
            </div>
        );
    }
}

export default Comment;