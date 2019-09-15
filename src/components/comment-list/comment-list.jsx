import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ListGroup, Col } from 'react-bootstrap'
import "./comment-list.css"
import CommentItem from "../Comment-items/comment-items"

class CommentList extends Component {

    static propTypes = {
        comments:PropTypes.array.isRequired,
        deleteComment:PropTypes.func.isRequired
    }

    render() {
        const {comments,deleteComment} = this.props
        const display = comments.length===0 ? 'block':'none'
        return (
            <Col>
                <h3>Comment Reply</h3>
                <h2 style={{display}}>No comments, please add comment</h2>
                <ListGroup>
                    {
                        comments.map((comment,index)=>
                        <CommentItem comment={comment} key={index} deleteComment={deleteComment} index={index}/>)
                    }
                </ListGroup>
            </Col>
        )
    }
}


export default CommentList

