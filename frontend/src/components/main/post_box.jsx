import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Card, CardActions, CardContent } from '@material-ui/core';

class PostBox extends React.Component {
    constructor(props){
        super(props)
        this.handleLike = this.handleLike.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleLike(){
        this.props.incrementLikes(this.props.post)
    }

    handleDelete(){
        this.props.removePost(this.props.post);
    }

    render() {
        return (
            <Card >
                <CardContent >
                    <Typography className = 'postText'>
                        {this.props.text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" id='likeId' onClick = {this.handleLike}>Like</Button>
                    <div className='likeClass'>
                        {this.props.post.likes} 
                    </div>
                    <Button size="small" onClick = {this.handleDelete}>Delete</Button>
                </CardActions>
            </Card>
        );
    }
}

export default PostBox;