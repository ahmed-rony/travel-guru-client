import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { HiArrowRight } from "react-icons/hi";
import "bootstrap/dist/css/bootstrap.min.css";
import './Banner.css';
import { Link } from 'react-router-dom';
// import "slick-carousel/slick/slick.css";
// import Slider from "react-slick/lib/slider";

const Banner = () => {
  
    return (
        <div>
            <Container className="main-content gx-0 mx-0 ">
            <Row>
              <Col lg={5} className="left-slide">
                <div className="left-content">
                  <h1>COX'S BAZAR</h1>
                  <p className='para-1'>
                    Cox's Bazar is a city, fishing port, tourism centre and
                    district headquarters in southeastern Bangladesh. It is
                    famous mostly for its long natural sandy beach, and it ...
                  </p>

                  <Link to='/booking'>
                    <button className="booking-btn">
                        Booking <HiArrowRight className="arrow-btn" />
                    </button>
                  </Link>

                </div>
              </Col>
              <Col lg={7} className="right-slide">
                {/* <Slider {...settings}> */}
                <Container className=" gx-0 mx-0 ">
                  <Row>
                    <Col lg={4}>
                      <div className="slide-item">
                        <div className="slide-img img-3">
                          <div className="slide-layer">
                            <h3>Sreemongol</h3>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="slide-item">
                        <div className="slide-img img-2">
                          <div className="slide-layer">
                            <h3>Sajek</h3>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="slide-item">
                        <div className="slide-img img-1">
                          <div className="slide-layer">
                            <h3>sundorbon</h3>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
                {/* </Slider> */}
              </Col>
            </Row>
          </Container>
        </div>
    );
};

export default Banner;