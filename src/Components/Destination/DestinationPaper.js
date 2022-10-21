import React from 'react';
import Paper from "@mui/material/Paper";
import { MdOutlinePeopleOutline, MdOutlineBedroomParent, MdOutlineBathtub } from "react-icons/md";
import { RiHotelBedLine } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { Col, Container, Row } from 'react-bootstrap';

const DestinationPaper = () => {
    return (
        <div>
            <Paper className="destination-item"  elevation={3}>
                            <Container className='gx-0 mx-0'>
                                <Row>
                                    <Col lg={5}>
                                        <div >
                                            <img className="stay-img" src={require("../../images/Rectangle 26.png")}  alt="img" />
                                        </div>
                                    </Col>
                                    <Col lg={7}>
                                        <div className="stay-info">
                                            <h3 className='stay-title'>Light bright airy stylish apt &#38; safe peaceful stay</h3>
                                            <div className="stay-service">
                                                <div className="service-counts">
                                                    <p><MdOutlinePeopleOutline className='service-icon' /> <span>3</span> guests</p>
                                                    <p><MdOutlineBedroomParent className='service-icon' /> <span>2</span> bedrooms</p>
                                                    <p><RiHotelBedLine className='service-icon' /> <span>3</span> beds</p>
                                                    <p><MdOutlineBathtub className='service-icon' /> <span>1</span> baths</p>
                                                </div>
                                                <div className="special-service">
                                                    <p>Wifi Air conditioning Kitchen</p>
                                                    <p>Cancellation fexibility availiable</p>
                                                </div>
                                                <div className="values">
                                                    <p className='rating'><AiFillStar className='star-icon' /> <span>4.8</span> &#40;5&#41;</p>
                                                    <p className='price'>$<span className='amount'>55</span><span>/</span> night</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Paper>
        </div>
    );
};

export default DestinationPaper;