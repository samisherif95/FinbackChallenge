import React from 'react';
import { AppBar, TextField, Button, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PostBox from './post_box';
import './App.css';

class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: "",
            posts:[]
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        let post = {
            text: this.state.text
        };
        this.props.composePost(post); 
        this.setState({text: ''});
    }

    update() {
        return e => this.setState({
            text: e.currentTarget.value
        });
    }

    componentDidMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(newState) {
        this.setState({
            posts: newState.posts
        });
    }

    render(){
        return(
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6">
                    FINBACK670 Takehome
                </Typography>
                </Toolbar>
            </AppBar>
            <header className="App-header">
                <div className="Newsfeed">
                <TextField
                    id="standard-multiline-flexible"
                    label="New Post"
                    onChange={this.update()}
                    value={this.state.text}
                    multiline
                />
                <Button variant="contained" onClick={this.handleSubmit}>Submit Post</Button>
                {this.state.posts.map(post => (
                    <PostBox key={post._id} post={post} text={post.text} removePost={this.props.removePost} incrementLikes={this.props.incrementLikes} />
                ))}
                </div>
            </header>
        </div>
        )
    }
}
export default MainPage