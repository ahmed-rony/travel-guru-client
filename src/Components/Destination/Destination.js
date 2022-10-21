import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from "../Header/Header";
import './Destination.css';
import DestinationPaper from './DestinationPaper';
// import { useJsApiLoader } from 'react-google-maps/api';


const center = { lat: 48.8584, lng: 2.2945 }

const Destination = () => {

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
    });
    if(!isLoaded){
        return <div>Loading map...</div>
    }

    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={7}>
                        <div className="destination-content">
                        <h3>Stay in Cox's Bazar</h3>
                        <DestinationPaper></DestinationPaper>
                        <DestinationPaper></DestinationPaper>
                        <DestinationPaper></DestinationPaper>

                        </div>
                    </Col>
                    <Col lg={5}>
                        <div>
                            <GoogleMap className='google-map' mapContainerStyle={{width: '100%', height: '100%'}} center={center} zoom={15}></GoogleMap>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Destination;