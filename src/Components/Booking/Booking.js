import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import "./Booking.css";
import { Link } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
// import dayjs from "dayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Booking = () => {
  // const dayjs = require("dayjs");
  // dayjs().format()

  // const [value, setValue] = useState(dayjs());

  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };

  return (
    <div>
      <div className="full-width">
        <div className="booking-bg-layer">
          <Header></Header>
          <div className="booking-all">
            <Container className="gx-0 mx-0">
              <Row>
                <Col lg={5}>
                  <div className="left-content">
                    <h1>COX'S BAZAR</h1>
                    <p className='para-2'>
                      Cox's Bazar is a town on the southeast coast of
                      Bangladesh. It's known for its very long, sandy
                      beachfront, stretching from Sea Beach in the north to
                      Kolatoli Beach in the south. Aggameda Khyang monastery is
                      home to bronze statues and centuries-old Buddhist
                      manuscripts. South of town, the tropical rainforest of
                      Himchari National Park has waterfalls and many birds.
                      North, sea turtles breed on nearby Sonadia Island.
                    </p>
                  </div>
                </Col>
                <Col lg={7}>
                  <Paper className="paper" elevation={3}>
                    <TextField
                      className="text-field"
                      label="Origin"
                      variant="filled"
                    />
                    <TextField
                      className="text-field"
                      label="Destination"
                      variant="filled"
                    />

                    <Link to='/booking'>
                      <button className="start-booking">
                          Start Booking
                      </button>
                    </Link>

                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        label="Date desktop"
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                      <MobileDatePicker
                        label="Date mobile"
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                      />

                    <DatePicker
                      views={['day']}
                      label="Just date"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} helperText={null} />}
                    />
                    </LocalizationProvider> */}
                  </Paper>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
