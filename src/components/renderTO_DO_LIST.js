import React, { Component } from "react";
import { Media, Col, Button, Row } from 'reactstrap'
import './renderTO_DO_LIST.css'
class RenderTo extends Component {
    handle = () => {
        let TO_DO = this.props.TO_DO_LIST.map((TO) => {
            return (
                <div className="bg-info cont text-white" style={{ textDecoration: TO.textDecoration }}>
                    <Col xs={{ offset: 1 }} className="mt-3 mb-3" >
                        <Media >
                            <Media body key={TO.id}>
                                <Media heading>
                                    {TO.Task}<span className="badge bg-primary">{TO.Time}</span>
                                    <h6 className="unline"></h6>
                                </Media>
                                <Row>
                                    <Col xs={9}>
                                        {TO.description}
                                    </Col>
                                    <Col xs={3}>
                                        <button onClick={() => this.props.change(TO.id)} className={TO.button}>
                                            <span className={TO.decordation}></span>
                                        </button>
                                        <Button className="ms-1" onClick={() => { this.props.deleteState(TO.id) }} color="danger"><span className="fa fa-trash"></span>
                                        </Button>
                                    </Col>
                                </Row>
                            </Media>
                        </Media>
                    </Col>
                </div>
            )
        })
        return TO_DO
    }
    render() {
        if (!this.props.TO_DO_LIST.length) {
            return (
                <div className="display-3 text-center text-warning" style={{ fontWeight: 500 }}>START YOUR WORK!!!</div>
            )
        }
        else {
            return (
                <div>
                    {this.handle()}
                </div>
            )
        }
    }
}
export default RenderTo;