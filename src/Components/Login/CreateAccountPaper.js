import React, { useState } from 'react';
import Paper from "@mui/material/Paper";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { IconButton, Input, InputAdornment } from "@mui/material";

const CreateAccountPaper = () => {
    const [values, setValues] = useState({
        amount: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return (
        <div>
            <Paper className="login-paper" elevation={4}>
                <h3>Create an account</h3>
                <form>
                  <Input
                    className="login-input"
                    placeholder="First Name"
                  ></Input>
                  <Input
                    className="login-input"
                    placeholder="Last Name"
                  ></Input>
                  <Input
                    className="login-input"
                    placeholder="Username or Email"
                  ></Input>

                  <Input
                    id="standard-adornment-password"
                    className="login-input"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    placeholder="Password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? (
                            <AiFillEyeInvisible className="icon-1" />
                            ) : (
                              <AiFillEye className="icon-1" />
                              )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <Input
                    id="standard-adornment-password"
                    className="login-input last-input"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    placeholder="Confirm Password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? (
                            <AiFillEyeInvisible className="icon-1" />
                            ) : (
                              <AiFillEye className="icon-1" />
                              )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  
                  <button className="start-booking create-login-account">Create an account</button>
                </form>
                <h6>Already have an account? <span>Login</span></h6>
              </Paper>
        </div>
    );
};

export default CreateAccountPaper;