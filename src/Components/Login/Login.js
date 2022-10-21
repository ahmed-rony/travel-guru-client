import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Login.css";
import Header from "../Header/Header";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import LoginPaper from "./LoginPaper";
// import CreateAccountPaper from "./CreateAccountPaper";

// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
  
  return (
    <div>
      <Header></Header>
      <Container className="login-bg">
        <Row>
          <Col lg={12}>
            <div>
              <LoginPaper></LoginPaper>
              {/* <CreateAccountPaper></CreateAccountPaper> */}

              <div className="social-box">

                <div className="devider">
                  <h3>Or</h3>
                </div>
                  
                <div className="social-login">
                  <BsFacebook className="social-icon" />
                  <h4>Continue with Facebook</h4>
                </div>
                <div className="social-login">
                  <FcGoogle className="social-icon" />
                  <h4>Continue with Google</h4>
                </div>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
