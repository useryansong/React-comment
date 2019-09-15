import React, { Component } from 'react'
import { ListGroup, ButtonToolbar, Button } from 'react-bootstrap'

import PropTypes from 'prop-types'

class CommentItems extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        deleteComment:PropTypes.func.isRequired,
        index:PropTypes.number.isRequired

    }

    handleClick = ()=> {
        const {comment,deleteComment,index} = this.props
        //notice
        if (window.confirm(`confirm to delete ${comment.username} comments?`)){
            deleteComment(index)
        }
    }
    render() {
        const {comment} = this.props
        return (
            <ListGroup>
                <ListGroup.Item>
                    <ButtonToolbar className="Button1">
                        <Button href="#" onClick={this.handleClick}>Delete</Button>
                    </ButtonToolbar>
                    <p><span>{comment.username}</span> <span>said:</span></p>
                    <p>{comment.content}</p>
                </ListGroup.Item>
            </ListGroup>

        )
    }
}

export default CommentItems