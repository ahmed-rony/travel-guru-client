import React, { useState } from 'react';
import Paper from "@mui/material/Paper";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Checkbox, FormControlLabel, IconButton, Input, InputAdornment } from "@mui/material";

const LoginPaper = () => {
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
                <h3>Login</h3>
                <form>
                  <Input
                    className="login-input"
                    placeholder="Username or Email"
                  ></Input>

                  <Input
                    id="standard-adornment-password"
                    className="login-input last-input"
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
                  <div className="login-option">
                  <FormControlLabel control={<Checkbox />}label="Remamber Password" className="checkbox" />
                  <h5>Forget Password</h5>
                  </div>
                  <button className="start-booking">Login</button>
                </form>
                <h6>Don't have an account? <span>Create an account</span></h6>
              </Paper>
        </div>
    );
};

export default LoginPaper;