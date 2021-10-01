import React from 'react'
import { Component } from 'react'
import './TO-DO-LIST.css'
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
class To_do_list extends Component {
    state = {
        Task: '',
        Time: '',
        description: ''
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addState(this.state)
        this.setState({
            Task: '',
            Time: '',
            description: ''
        })
    }
    render() {
        return (
            < div className="fixed-bottom bg-primary task">
                <h1 className="badge bg-danger heading">ADD TASK!!</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup className="mt-2 mb-2" row>
                        <Col xs={{ size: 5, offset: 1 }}>
                            <Input placeholder="Don't be lazy Enter A Task" name="Task" type="text" onChange={this.handleInput} value={this.state.Task} />
                        </Col>
                        <Col xs={3}>
                            <Input type="time" placeholder="Time" name="Time" onChange={this.handleInput} value={this.state.Time} />
                        </Col>
                    </FormGroup>
                    <FormGroup className="mb-2" row>
                        <Col xs={{ size: 5, offset: 1 }}>
                            <Input type="text" placeholder="Describe It" name="description" onChange={this.handleInput} value={this.state.description} />
                        </Col>
                        <Col xs={2}>
                            <Button color="danger"><span className="fa fa-pencil fa-lg"></span></Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}
export default To_do_list