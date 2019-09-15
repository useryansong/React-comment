import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Button, ButtonToolbar, Col } from 'react-bootstrap'

class CommentAdd extends Component {

    static propTypes = {
        addComment: PropTypes.func.isRequired
    }

    state={
        username:'',
        content:''
    }
    handleSubmit = () => {
        // collect data, and sealed to comment object
        const comment = this.state

        //update state
        this.props.addComment(comment)
        //clear input data
        this.setState({
            username:'',
            content:''
        })
    }
    handleNameChange = (event) => {
        const username = event.target.value
        this.setState({username})
    }
    handleContentChange = (event) => {
        const content = event.target.value
        this.setState({content})
    }
    render() {
        const {username,content}=this.state
        return (

            <Col>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" value={username} 
                        onChange={this.handleNameChange}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control as="textarea" rows="3" value={content}
                        onChange={this.handleContentChange}/>
                    </Form.Group>
                    <ButtonToolbar>
                    <Button type="button" onClick={this.handleSubmit} >Submit</Button>
                    </ButtonToolbar>
                </Form>
            </Col>

        )
    }
}


export default CommentAdd