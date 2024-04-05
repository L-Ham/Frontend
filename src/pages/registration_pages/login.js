/*eslint-disable*/
import { useEffect, useState } from "react";

import { Heading } from "../.././generic components/guestpagecomponents/logincomponents/heading";
import {UserAgreement} from "../.././generic components/guestpagecomponents/logincomponents/useragreement"; // Update the import statement
import {BasicTextFields} from "../.././generic components/guestpagecomponents/logincomponents/textfields";
import {Divider} from "../.././generic components/guestpagecomponents/divider";
import {Forgot} from "../.././generic components/guestpagecomponents/logincomponents/forgot";
import {NewMember} from "../.././generic components/guestpagecomponents/logincomponents/newmember";
import {ContinueWithGoogleButton} from "../.././generic components/guestpagecomponents/googlelogin";
import { GoogleOAuthProvider } from "@react-oauth/google";
import {SignUpWithGoogleButton} from "../.././generic components/guestpagecomponents/signupcomponents/google";
import LoginForm from "../.././generic components/guestpagecomponents/mergedtextfields";
import { TextFields } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Login() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.token) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <div className="fixed w-full h-full left-0 top-0">
      <div className="fixed w-full h-full left-0 top-0">
        <div style={{  float: 'left', height: '100%', width: '10%'   }}>
          <img
            src="https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png"
            alt="React Logo"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div style={{  float: 'right', height: '100%', width: '87%'   }}>       
         <div style={{ marginBottom: "95px" }} /> {/* Spacer above Heading */}
          <Heading />
          <div style={{ marginBottom: "5px" }} /> {/* Spacer below Heading */}
          <UserAgreement />
          <div style={{ marginBottom: "50px" }} />{" "}
          {/* Spacer between components */}
        
          <div style={{ marginBottom: "20px" }} />{" "}
          {/* Spacer between components */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <SignUpWithGoogleButton />
            <div style={{ marginBottom: "60px" }} />{" "}
            {/* Spacer between components */}
            <Divider length={210} /> 

            <LoginForm />
          
            <div style={{ marginBottom: "1px" }} />{" "}
            {/* Spacer between components */}
            <Forgot />
            <div style={{ marginBottom: "10px" }} />{" "}
            {/* Spacer between components */}
            <NewMember />
          </div>
        </div>
      </div>
    </div>
  );
}

export  {Login};