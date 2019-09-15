import React, { Component } from 'react'

import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Jumbotron, Container, Row, } from 'react-bootstrap'
import './app.css'
import CommentAdd from '../comment-add/comment-add';
import CommentList from '../comment-list/comment-list';

class App extends Component {

    constructor (props) {
        super(props) 
            this.state = {
                comments:[
                    {username:'Tom', content:'React is good!'},
                    {username:'Jacg', content:'Weather is Bad!'}
                ]
            }
    }

    addComment = (comment) => {
        const {comments} = this.state
        comments.unshift(comment)

        //update state
        this.setState({comments})
    }
    //delete comment
    deleteComment = (index) => {
        const {comments} = this.state
        comments.splice(index,1)

        //update
        this.setState({comments})
    }

    render() {
        const {comments}=this.state
        return (
            <div>
                <Jumbotron fluid>
                    <Container className="Header">
                        <h1>React bootstrap</h1>
                        <p>
                            React comment Practice
                        </p>
                    </Container>
                </Jumbotron>

                <Container>
                    <Row>
                        <CommentAdd addComment={this.addComment}></CommentAdd>
                        <CommentList comments={comments} deleteComment={this.deleteComment}></CommentList>
                    </Row>
                </Container>
 
            </div>
        )
    }
}


export default App